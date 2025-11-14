import { type IBaseController } from '@interfaces/controllers/IBaseController.js';
import { type IUser } from '@interfaces/IUser.js';
import { type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData } from '@strife/common';

export interface IFileSystemController extends IBaseController {
  createFileSystemDirectory(user: IUser, projectId: string, fileSystemObjectId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData>;
  createFileSystemFile(user: IUser, projectId: string, fileSystemObjectId: string, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData>;
  deleteFileSystemObject(user: IUser, projectId: string, fileSystemObjectId: string): Promise<void>;
  getFileSystemObject(user: IUser, projectId: string, fileSystemObjectId: string): Promise<FileSystemDirectoryData | FileSystemFileData>;
}