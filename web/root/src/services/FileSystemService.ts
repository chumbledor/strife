import BaseService from '@/services/BaseService';
import { type IFileSystemService } from '@interfaces/services/IFileSystemService';
import { AnyFileSystemObjectSchema, FileSystemDirectorySchema, FileSystemObjectType, type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export default class FileSystemService extends BaseService implements IFileSystemService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/projects`;
  }
  
  public createFileSystemDirectory(projectId: string, fileSystemObjectId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData> {
    if (!this.user.account)
      return Promise.reject();

    return this.post<FileSystemDirectoryData>({ schema: FileSystemDirectorySchema, url: `/${projectId}/fs/${fileSystemObjectId}`, data: createFileSystemDirectoryData });
  }
  
  public createFileSystemFile(projectId: string, fileSystemObjectId: string, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData> {
    if (!this.user.account)
      return Promise.reject();

    throw new Error('Method not implemented.');
  }
  
  public async getFileSystemObject(projectId: string, fileSystemObjectId: string): Promise<FileSystemDirectoryData | FileSystemFileData> {
    if (!this.user.account)
      return Promise.reject();
    
    const anyFileSystemObjectData = await this.get<AnyFileSystemObjectData>({ schema: AnyFileSystemObjectSchema, url: `/${projectId}/fs/${fileSystemObjectId}` });
    switch (anyFileSystemObjectData.type) {
      case FileSystemObjectType.Directory:
        return anyFileSystemObjectData as FileSystemDirectoryData;
      case FileSystemObjectType.File:
        return anyFileSystemObjectData as FileSystemFileData;
      default:
        return Promise.reject();
    }
  }

}