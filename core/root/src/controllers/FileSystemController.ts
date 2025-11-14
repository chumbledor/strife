import BaseController from '@/controllers/BaseController.js';
import { default as FileSystemDirectoryModel, default as FileSystemFileModel } from '@/models/FileSystemDirectoryModel.js';
import { type IFileSystemController } from '@interfaces/controllers/IFileSystemController.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IFileSystemObject } from '@interfaces/models/IFileSystemObjectModel.js';
import { FileSystemDirectorySchema, FileSystemFileSchema, FileSystemObjectSchema, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type FileSystemObjectData, type GetFileSystemObjectsData } from '@strife/common';
import { injectable } from 'inversify';
import mongoose from 'mongoose';

@injectable()
export default class FileSystemController extends BaseController implements IFileSystemController {

  // public async createFileSystemObject(user: IUser, projectId: string, fileSystemObjectId: string, createFileSystemObjectData: CreateFileSystemDirectoryData | CreateFileSystemFileData): Promise<FileSystemDirectoryData | FileSystemFileData> {
  //   try {
  //     this.sql.project.findOneOrFail({ account: user.account, id: projectId });
  //   } catch (error: any) {
  //     return Promise.reject();
  //   }

  //   const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: fileSystemObjectId, projectId });
  //   if (!parentFileSystemDirectory)
  //     return Promise.reject();

  //   const fileSystemDirectory = new this.nosql.fileSystemDirectory({
  //     projectId,
  //     parentId: fileSystemObjectId,
  //     name: createFileSystemDirectoryData.name
  //   });

  //   fileSystemDirectory.save();

  //   parentFileSystemDirectory.childrenIds.push(fileSystemDirectory.id);
  //   parentFileSystemDirectory.save();
    
  //   return await FileSystemDirectorySchema.parseAsync(fileSystemDirectory);
  // }

  public async createFileSystemDirectory(user: IUser, projectId: string, fileSystemObjectId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData> {
    try {
      this.sql.project.findOneOrFail({ account: user.account, id: projectId });
    } catch (error: any) {
      return Promise.reject();
    }

    const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: fileSystemObjectId, projectId });
    if (!parentFileSystemDirectory)
      return Promise.reject();

    const fileSystemDirectory = new this.nosql.fileSystemDirectory({
      projectId,
      parentId: fileSystemObjectId,
      name: createFileSystemDirectoryData.name
    });

    fileSystemDirectory.save();

    parentFileSystemDirectory.childrenIds.push(fileSystemDirectory.id);
    parentFileSystemDirectory.save();
    
    return await FileSystemDirectorySchema.parseAsync(fileSystemDirectory);
  }

  public async createFileSystemFile(user: IUser, projectId: string, fileSystemObjectId: string, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData> {
    try {
      this.sql.project.findOneOrFail({ account: user.account, id: projectId });
    } catch (error: any) {
      return Promise.reject();
    }

    const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: fileSystemObjectId, projectId });
    if (!parentFileSystemDirectory)
      return Promise.reject();

    const fileSystemFile = new this.nosql.fileSystemFile({
      projectId,
      parentId: fileSystemObjectId,
      name: createFileSystemFileData.name,
      size: createFileSystemFileData.size,
      mimeType: createFileSystemFileData.mimeType
    });

    fileSystemFile.save();

    parentFileSystemDirectory.childrenIds.push(fileSystemFile.id);
    parentFileSystemDirectory.save();
    
    return await FileSystemFileSchema.parseAsync(fileSystemFile);
  }

  public async deleteFileSystemObject(user: IUser, projectId: string, fileSystemObjectId: string): Promise<void> {
    try {
      this.sql.project.findOneOrFail({ account: user.account, id: projectId });
    } catch (error: any) {
      return Promise.reject();
    }

    await this.nosql.fileSystemObject.deleteOne({ id: fileSystemObjectId });
  }

  public async getFileSystemObject(user: IUser, projectId: string, fileSystemObjectId: string): Promise<FileSystemDirectoryData | FileSystemFileData> {
    try {
      this.sql.project.findOneOrFail({ account: user.account, id: projectId });
    } catch (error: any) {
      return Promise.reject();
    }

    const fileSystemObject = await this.nosql.fileSystemObject.findOne({ _id: fileSystemObjectId, projectId });
    
    if (fileSystemObject instanceof FileSystemDirectoryModel)
      return FileSystemDirectorySchema.parseAsync(fileSystemObject);
    else if (fileSystemObject instanceof FileSystemFileModel)
      return FileSystemFileSchema.parseAsync(fileSystemObject);

    return Promise.reject();
  }

  public async getFileSystemObjects(user: IUser, projectId: string, getFileSystemObjectsData: GetFileSystemObjectsData): Promise<(FileSystemDirectoryData | FileSystemFileData)[]> {
    try {
      this.sql.project.findOneOrFail({ account: user.account, id: projectId });
    } catch (error: any) {
      return Promise.reject();
    }

    const query: mongoose.FilterQuery<IFileSystemObject> = {
      projectId
    };

    if (getFileSystemObjectsData.ids) {
      query.id = {
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

    const fileSystemObjects = await this.nosql.fileSystemObject.find(query)
      .skip(getFileSystemObjectsData.skip)
      .limit(getFileSystemObjectsData.take);

    const promises = fileSystemObjects.map(
      async (fileSystemObject: IFileSystemObject): Promise<FileSystemDirectoryData | FileSystemFileData> => {
        if (fileSystemObject instanceof FileSystemDirectoryModel)
          return FileSystemDirectorySchema.parseAsync(fileSystemObject);
        else
          return FileSystemFileSchema.parseAsync(fileSystemObject);
      }
    );
    
    return await Promise.all(promises);
  }

}