import BaseController from '@/controllers/BaseController.js';
import { type IFileSystemController } from '@interfaces/controllers/IFileSystemController.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IFileSystemObject } from '@interfaces/models/IFileSystemObjectModel.js';
import { CreateFileSystemDirectorySchema, CreateFileSystemFileSchema, FileSystemDirectorySchema, FileSystemFileSchema, FileSystemObjectType, type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type CreateFileSystemObjectData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';
import { injectable } from 'inversify';
import mongoose from 'mongoose';

@injectable()
export class FileSystemController extends BaseController implements IFileSystemController {

  public async existsFileSystemObject(query: mongoose.FilterQuery<IFileSystemObject>): Promise<boolean> {
    const count = await this.nosql.fileSystemObject
      .find(query)
      .countDocuments();
    return count > 0;
  }

  public async createFileSystemObject(user: IUser, fileSystemId: string, createFileSystemObjectData: CreateFileSystemObjectData): Promise<AnyFileSystemObjectData> {
    if (createFileSystemObjectData.type == FileSystemObjectType.Directory) {
      const createFileSystemDirectoryData = await CreateFileSystemDirectorySchema.parseAsync(createFileSystemObjectData);
      return this.createFileSystemDirectory(user, fileSystemId, createFileSystemDirectoryData);
    } else if (createFileSystemObjectData.type == FileSystemObjectType.File) {
      const createFileSystemFileData = await CreateFileSystemFileSchema.parseAsync(createFileSystemObjectData);
      return this.createFileSystemFile(user, fileSystemId, createFileSystemFileData);
    }

    return Promise.reject();
  }

  public async createFileSystemDirectory(user: IUser, fileSystemId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData> {
    try {
      const fileSystem = await this.sql.fileSystem.findOneOrFail({ id: fileSystemId });
      if (!fileSystem.hasPermission(user))
        return Promise.reject();
    } catch (error: any) {
      return Promise.reject();
    }

    const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: createFileSystemDirectoryData.parentId, fileSystemId });
    if (!parentFileSystemDirectory)
      return Promise.reject();

    const fileSystemDirectory = new this.nosql.fileSystemDirectory({
      fileSystemId,
      parentId: createFileSystemDirectoryData.parentId,
      name: createFileSystemDirectoryData.name
    });

    fileSystemDirectory.save();

    parentFileSystemDirectory.childrenIds.push(fileSystemDirectory.id);
    parentFileSystemDirectory.save();
    
    return await FileSystemDirectorySchema.parseAsync(fileSystemDirectory);
  }

  public async createFileSystemFile(user: IUser, fileSystemId: string, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData> {
    try {
      const fileSystem = await this.sql.fileSystem.findOneOrFail({ id: fileSystemId });
      if (!fileSystem.hasPermission(user))
        return Promise.reject();
    } catch (error: any) {
      return Promise.reject();
    }

    const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: createFileSystemFileData.parentId, fileSystemId });
    if (!parentFileSystemDirectory)
      return Promise.reject();

    const fileSystemFile = new this.nosql.fileSystemFile({
      fileSystemId,
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

  public async deleteFileSystemObject(user: IUser, fileSystemId: string, fileSystemObjectId: string): Promise<void> {
    try {
      const fileSystem = await this.sql.fileSystem.findOneOrFail({ id: fileSystemId });
      if (!fileSystem.hasPermission(user))
        return Promise.reject();
    } catch (error: any) {
      return Promise.reject();
    }

    await this.nosql.fileSystemObject.deleteOne({ id: fileSystemObjectId, fileSystemId });
  }

  public async getFileSystemObject(user: IUser, fileSystemId: string, fileSystemObjectId: string): Promise<AnyFileSystemObjectData> {
    try {
      const fileSystem = await this.sql.fileSystem.findOneOrFail({ id: fileSystemId });
      if (!fileSystem.hasPermission(user))
        return Promise.reject();
    } catch (error: any) {
      return Promise.reject();
    }

    const fileSystemObject = await this.nosql.fileSystemObject.findOne({ id: fileSystemObjectId, fileSystemId });
    if (!fileSystemObject)
      return Promise.reject();
    
    if (fileSystemObject.type == FileSystemObjectType.Directory)
      return FileSystemDirectorySchema.parseAsync(fileSystemObject);
    else if (fileSystemObject.type == FileSystemObjectType.File)
      return FileSystemFileSchema.parseAsync(fileSystemObject);

    return Promise.reject();
  }

  public async getFileSystemObjects(user: IUser, fileSystemId: string, getFileSystemObjectsData: GetFileSystemObjectsData): Promise<AnyFileSystemObjectData[]> {
    const query: mongoose.FilterQuery<IFileSystemObject> = {
      fileSystemId
    };

    if (getFileSystemObjectsData.ids) {
      query._id = {
        $in: getFileSystemObjectsData.ids
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

export default FileSystemController;