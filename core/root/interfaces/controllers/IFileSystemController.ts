import { type IBaseController } from '@interfaces/controllers/IBaseController.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IFileSystemObject } from '@interfaces/models/IFileSystemObjectModel.js';
import { type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type CreateFileSystemObjectData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';
import mongoose from 'mongoose';

export interface IFileSystemController extends IBaseController {
  existsFileSystemObject(query: mongoose.FilterQuery<IFileSystemObject>): Promise<boolean>;
  createFileSystemObject(user: IUser, fileSystemId: string, createFileSystemObjectData: CreateFileSystemObjectData): Promise<AnyFileSystemObjectData>;
  createFileSystemDirectory(user: IUser, fileSystemId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData>;
  createFileSystemFile(user: IUser, fileSystemId: string, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData>;
  deleteFileSystemObject(user: IUser, fileSystemId: string, fileSystemObjectId: string): Promise<void>;
  getFileSystemObject(user: IUser, fileSystemId: string, fileSystemObjectId: string): Promise<AnyFileSystemObjectData>;
  getFileSystemObjects(user: IUser, fileSystemId: string, getFileSystemObjectsData: GetFileSystemObjectsData): Promise<AnyFileSystemObjectData[]>
}