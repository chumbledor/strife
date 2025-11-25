import { type IBaseService } from '@interfaces/services/IBaseService';
import { type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';

export interface IFileSystemService extends IBaseService {
  createFileSystemDirectory(fileSystemId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData>;
  createFileSystemFile(fileSystemId: string, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData>;
  getFileSystemObject(fileSystemId: string, fileSystemObjectId: string): Promise<AnyFileSystemObjectData>;
  getFileSystemObjects(fileSystemId: string, getFileSystemObjectsData: GetFileSystemObjectsData): Promise<AnyFileSystemObjectData[]>;
}