import { type IBaseService } from '@interfaces/services/IBaseService';
import { type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData } from '@strife/common';

export interface IFileSystemService extends IBaseService {
  createFileSystemDirectory(projectId: string, fileSystemObjectId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData>;
  createFileSystemFile(projectId: string, fileSystemObjectId: string, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData>;
  getFileSystemObject(projectId: string, fileSystemObjectId: string): Promise<FileSystemDirectoryData | FileSystemFileData>;
}