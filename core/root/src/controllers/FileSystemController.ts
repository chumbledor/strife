import BaseController from '@/controllers/BaseController.js';
import FileSystemDirectoryModel from '@/models/FileSystemDirectoryModel.js';
import FileSystemFileModel from '@/models/FileSystemFileModel.js';
import { type IFileSystemController } from '@interfaces/controllers/IFileSystemController.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IFileSystemObject } from '@interfaces/models/IFileSystemObjectModel.js';
import { Algorithms, CreateFileSystemDirectorySchema, CreateFileSystemFileSchema, CreateFileSystemObjectData, FileSystemDirectorySchema, FileSystemFileSchema, FileSystemObjectType, type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';
import { injectable } from 'inversify';
import mongoose from 'mongoose';

@injectable()
export default class FileSystemController extends BaseController implements IFileSystemController {

  public async existsFileSystemObject(query: mongoose.FilterQuery<IFileSystemObject>): Promise<boolean> {
    query = {
      ...query
    };

    const count = await this.nosql.fileSystemObject
      .find(query)
      .countDocuments();
    return count > 0;
  }

  public async createFileSystemObject(user: IUser, createFileSystemObjectData: CreateFileSystemObjectData): Promise<AnyFileSystemObjectData> {
    if (createFileSystemObjectData.type == FileSystemObjectType.Directory) {
      const createFileSystemDirectoryData = await CreateFileSystemDirectorySchema.parseAsync(createFileSystemObjectData);
      return this.createFileSystemDirectory(user, createFileSystemDirectoryData);
    } else if (createFileSystemObjectData.type == FileSystemObjectType.File) {
      const createFileSystemFileData = await CreateFileSystemFileSchema.parseAsync(createFileSystemObjectData);
      return this.createFileSystemFile(user, createFileSystemFileData);
    }

    return Promise.reject();
  }

  public async createFileSystemDirectory(user: IUser, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData> {
    try {
      await this.sql.project.findOneOrFail({ account: user.account, id: createFileSystemDirectoryData.projectId });
    } catch (error: any) {
      return Promise.reject();
    }

    const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: createFileSystemDirectoryData.parentId, projectId: createFileSystemDirectoryData.projectId });
    if (!parentFileSystemDirectory)
      return Promise.reject();

    const fileSystemDirectory = new this.nosql.fileSystemDirectory({
      projectId: createFileSystemDirectoryData.projectId,
      parentId: createFileSystemDirectoryData.parentId,
      name: createFileSystemDirectoryData.name
    });

    fileSystemDirectory.save();

    parentFileSystemDirectory.childrenIds.push(fileSystemDirectory.id);
    parentFileSystemDirectory.save();
    
    return await FileSystemDirectorySchema.parseAsync(fileSystemDirectory);
  }

  public async createFileSystemFile(user: IUser, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData> {
    try {
      await this.sql.project.findOneOrFail({ account: user.account, id: createFileSystemFileData.projectId });
    } catch (error: any) {
      return Promise.reject();
    }

    const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: createFileSystemFileData.parentId, projectId: createFileSystemFileData.projectId });
    if (!parentFileSystemDirectory)
      return Promise.reject();

    const fileSystemFile = new this.nosql.fileSystemFile({
      projectId: createFileSystemFileData.projectId,
      parentId: createFileSystemFileData.parentId,
      name: createFileSystemFileData.name,
      size: createFileSystemFileData.size,
      mimeType: createFileSystemFileData.mimeType
    });

    fileSystemFile.save();

    parentFileSystemDirectory.childrenIds.push(fileSystemFile.id);
    parentFileSystemDirectory.save();
    
    return await FileSystemFileSchema.parseAsync(fileSystemFile);
  }

  public async deleteFileSystemObject(user: IUser, fileSystemObjectId: string): Promise<void> {
    const fileSystemObject = await this.nosql.fileSystemObject.findOne({ id: fileSystemObjectId });
    if (!fileSystemObject)
      return Promise.reject();

    if (await fileSystemObject.hasPermission(user))
      return Promise.reject();

    await fileSystemObject.deleteOne();
  }

  public async getFileSystemObject(user: IUser, fileSystemObjectId: string): Promise<AnyFileSystemObjectData> {
    const fileSystemObject = await this.nosql.fileSystemObject.findOne({ id: fileSystemObjectId });
    if (!fileSystemObject)
      return Promise.reject();

    if (await fileSystemObject.hasPermission(user))
      return Promise.reject();
    
    if (fileSystemObject instanceof FileSystemDirectoryModel)
      return FileSystemDirectorySchema.parseAsync(fileSystemObject);
    else if (fileSystemObject instanceof FileSystemFileModel)
      return FileSystemFileSchema.parseAsync(fileSystemObject);

    return Promise.reject();
  }

  public async getFileSystemObjects(user: IUser, getFileSystemObjectsData: GetFileSystemObjectsData): Promise<AnyFileSystemObjectData[]> {
    // If we specified a projectId in the data, verify that the user has permission to view file system objects from that project
    if (getFileSystemObjectsData.projectId) {
      try {
        await this.sql.project.findOneOrFail({ account: user.account, id: getFileSystemObjectsData.projectId });
      } catch (error: any) {
        return Promise.reject();
      }
    }

    const query: mongoose.FilterQuery<IFileSystemObject> = {};

    if (getFileSystemObjectsData.projectId) {
      query.projectId = getFileSystemObjectsData.projectId
    }

    console.log(`\n${JSON.stringify(getFileSystemObjectsData.ids)}\n`)
    if (getFileSystemObjectsData.ids) {
      query._id = {
        $in: getFileSystemObjectsData.ids.map((id: string): mongoose.Types.ObjectId => new mongoose.Types.ObjectId(id))
      }
    }

    if (getFileSystemObjectsData.parentId) {
      query.parentId = getFileSystemObjectsData.parentId;
    }

    if (getFileSystemObjectsData.name) {
      query.name = {
        $regex: getFileSystemObjectsData.name,
        $options: 'i'
      }
    }

    let fileSystemObjects = await this.nosql.fileSystemObject.find(query)
      .skip(getFileSystemObjectsData.skip)
      .limit(getFileSystemObjectsData.take);

    // If we did not specify a projectId in the data, verify that the user has permission to view each file system object
    // WARNING: This could be very expensive
    if (!getFileSystemObjectsData.projectId) {
      fileSystemObjects = await Algorithms.filterAsync(
        fileSystemObjects,
        (fileSystemObject: mongoose.HydratedDocument<IFileSystemObject>): Promise<boolean> => fileSystemObject.hasPermission(user)
      );
    }

    const promises = fileSystemObjects.map(
      async (fileSystemObject: IFileSystemObject): Promise<AnyFileSystemObjectData> => {
        if (fileSystemObject.type == FileSystemObjectType.Directory)
          return FileSystemDirectorySchema.parseAsync(fileSystemObject);
        else if (fileSystemObject.type == FileSystemObjectType.File)
          return FileSystemFileSchema.parseAsync(fileSystemObject);
        else 
          return Promise.reject();
      }
    );

    return Promise.all(promises);
  }

}