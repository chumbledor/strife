import BaseService from '@/services/BaseService';
import { FileSystem } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class FileSystemService extends BaseService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/filesystems`;
  }
  
  public createFileSystemDirectoryObject(fileSystemId: string, createDirectoryObjectData: FileSystem.CreateDirectoryObjectData): Promise<FileSystem.DirectoryObjectData> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.post({ schema: FileSystem.DirectoryObjectSchema, url: `/${fileSystemId}/objects`, data: createDirectoryObjectData });
  }
  
  public createFileSystemFileObject(fileSystemId: string, createFileObjectData: FileSystem.CreateFileObjectData): Promise<FileSystem.FileObjectData> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.post({ schema: FileSystem.FileObjectSchema, url: `/${fileSystemId}/objects`, data: createFileObjectData });
  }

  public deleteFileSystemObject(fileSystemId: string, fileSystemObjectId: string): Promise<void> {
    if (!this.user.accountData)
      return Promise.reject();
    
    return this.delete({ url: `/${fileSystemId}/objects/${fileSystemObjectId}` });
  }
  
  public async getFileSystemObject(fileSystemId: string, fileSystemObjectId: string): Promise<FileSystem.AnyObjectData> {
    if (!this.user.accountData)
      return Promise.reject();

    return await this.get({ schema: FileSystem.AnyObjectSchema, url: `/${fileSystemId}/objects/${fileSystemObjectId}` });
  }

  public async getFileSystemObjects(fileSystemId: string, getObjectsData: FileSystem.GetObjectsData): Promise<FileSystem.AnyObjectData[]> {
    if (!this.user.accountData)
      return Promise.reject();

    return await this.get({ schema: FileSystem.AnyObjectSchema.array(), url: `/${fileSystemId}/objects`, data: getObjectsData });
  }

}

export default FileSystemService;