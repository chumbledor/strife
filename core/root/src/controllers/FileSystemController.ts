import BaseController from '@/controllers/BaseController.js';
import { type FileSystemObject } from '@/models/file-system/FileSystemObjectModel.js';
import User from '@/User.js';
import { FileSystem } from '@strife/common';
import { injectable } from 'inversify';
import mongoose from 'mongoose';

@injectable()
export class FileSystemController extends BaseController {

  public async existsFileSystemObject(query: mongoose.FilterQuery<FileSystemObject>): Promise<boolean> {
    const count = await this.nosql.fileSystemObject
      .find(query)
      .countDocuments();
    return count > 0;
  }

  public async createFileSystemObject(user: User, fileSystemId: string, createObjectData: FileSystem.CreateObjectData): Promise<FileSystem.AnyObjectData> {
    if (createObjectData.type == FileSystem.ObjectType.Directory) {
      const createDirectoryObjectData = await FileSystem.CreateDirectoryObjectSchema.parseAsync(createObjectData);
      return this.createFileSystemDirectoryObject(user, fileSystemId, createDirectoryObjectData);
    } else if (createObjectData.type == FileSystem.ObjectType.File) {
      const createFileObjectData = await FileSystem.CreateFileObjectSchema.parseAsync(createObjectData);
      return this.createFileSystemFileObject(user, fileSystemId, createFileObjectData);
    }

    return Promise.reject();
  }

  public async createFileSystemDirectoryObject(user: User, fileSystemId: string, createDirectoryObjectData: FileSystem.CreateDirectoryObjectData): Promise<FileSystem.DirectoryObjectData> {
    try {
      const fileSystem = await this.sql.fileSystem.findOneOrFail({ id: fileSystemId });
      if (!fileSystem.hasPermission(user))
        return Promise.reject();
    } catch (error: any) {
      return Promise.reject();
    }

    const parentFileSystemDirectory = await this.nosql.fileSystemDirectoryObject.findOne({ _id: createDirectoryObjectData.parentFileSystemObjectId, fileSystemId });
    if (!parentFileSystemDirectory)
      return Promise.reject();

    const fileSystemDirectory = new this.nosql.fileSystemDirectoryObject({
      fileSystemId,
      parentFileSystemObjectId: createDirectoryObjectData.parentFileSystemObjectId,
      name: createDirectoryObjectData.name
    });

    fileSystemDirectory.save();

    parentFileSystemDirectory.childrenFileSystemObjectIds.push(fileSystemDirectory.id);
    parentFileSystemDirectory.save();
    
    return await FileSystem.DirectoryObjectSchema.parseAsync(fileSystemDirectory);
  }

  public async createFileSystemFileObject(user: User, fileSystemId: string, createFileObjectData: FileSystem.CreateFileObjectData): Promise<FileSystem.FileObjectData> {
    try {
      const fileSystem = await this.sql.fileSystem.findOneOrFail({ id: fileSystemId });
      if (!fileSystem.hasPermission(user))
        return Promise.reject();
    } catch (error: any) {
      return Promise.reject();
    }

    const parentFileSystemDirectory = await this.nosql.fileSystemDirectoryObject.findOne({ _id: createFileObjectData.parentFileSystemObjectId, fileSystemId });
    if (!parentFileSystemDirectory)
      return Promise.reject();

    const fileSystemFile = new this.nosql.fileSystemFileObject({
      fileSystemId,
      parentFileSystemDirectoryObjectId: createFileObjectData.parentFileSystemObjectId,
      name: createFileObjectData.name
    });

    fileSystemFile.save();

    parentFileSystemDirectory.childrenFileSystemObjectIds.push(fileSystemFile.id);
    parentFileSystemDirectory.save();
    
    return await FileSystem.FileObjectSchema.parseAsync(fileSystemFile);
  }

  public async deleteFileSystemObject(user: User, fileSystemId: string, fileSystemObjectId: string): Promise<void> {
    try {
      const fileSystem = await this.sql.fileSystem.findOneOrFail({ id: fileSystemId });
      if (!fileSystem.hasPermission(user))
        return Promise.reject();
    } catch (error: any) {
      return Promise.reject();
    }

    await this.nosql.fileSystemObject.deleteOne({ id: fileSystemObjectId, fileSystemId });
  }

  public async getFileSystemObject(user: User, fileSystemId: string, fileSystemObjectId: string): Promise<FileSystem.AnyObjectData> {
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
    
    if (fileSystemObject.type == FileSystem.ObjectType.Directory)
      return FileSystem.DirectoryObjectSchema.parseAsync(fileSystemObject);
    else if (fileSystemObject.type == FileSystem.ObjectType.File)
      return FileSystem.FileObjectSchema.parseAsync(fileSystemObject);

    return Promise.reject();
  }

  public async getFileSystemObjects(user: User, fileSystemId: string, getObjectsData: FileSystem.GetObjectsData): Promise<FileSystem.AnyObjectData[]> {
    const query: mongoose.FilterQuery<FileSystemObject> = {
      fileSystemId
    };

    if (getObjectsData.ids) {
      query._id = {
        $in: getObjectsData.ids
      }
    }

    if (getObjectsData.parentFileSystemObjectId) {
      query.parentFileSystemObjectId = getObjectsData.parentFileSystemObjectId;
    }

    if (getObjectsData.name) {
      query.name = {
        $regex: getObjectsData.name,
        $options: 'i'
      }
    }

    let fileSystemObjects = await this.nosql.fileSystemObject.find(query)
      .skip(getObjectsData.skip)
      .limit(getObjectsData.take);

    const promises = fileSystemObjects.map(
      async (fileSystemObject: FileSystemObject): Promise<FileSystem.AnyObjectData> => {
        if (fileSystemObject.type == FileSystem.ObjectType.Directory)
          return FileSystem.DirectoryObjectSchema.parseAsync(fileSystemObject);
        else if (fileSystemObject.type == FileSystem.ObjectType.File)
          return FileSystem.FileObjectSchema.parseAsync(fileSystemObject);
        else 
          return Promise.reject();
      }
    );

    return Promise.all(promises);
  }

}

export default FileSystemController;