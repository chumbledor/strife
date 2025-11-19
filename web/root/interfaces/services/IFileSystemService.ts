import { type IBaseService } from '@interfaces/services/IBaseService';
import { type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';

export interface IFileSystemService extends IBaseService {
  createFileSystemDirectory(createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData>;
  createFileSystemFile(createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData>;
  getFileSystemObject(fileSystemObjectId: string, projectId?: string): Promise<AnyFileSystemObjectData>;
  getFileSystemObjects(getFileSystemObjectsData: GetFileSystemObjectsData): Promise<AnyFileSystemObjectData[]>;
}