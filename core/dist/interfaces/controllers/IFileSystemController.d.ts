import { type IBaseController } from '../controllers/IBaseController.js';
import { type IUser } from '../IUser.js';
import { type IFileSystemObject } from '../models/IFileSystemObjectModel.js';
import { type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type CreateFileSystemObjectData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';
import mongoose from 'mongoose';
export interface IFileSystemController extends IBaseController {
    existsFileSystemObject(query: mongoose.FilterQuery<IFileSystemObject>): Promise<boolean>;
    createFileSystemObject(user: IUser, createFileSystemObjectData: CreateFileSystemObjectData): Promise<AnyFileSystemObjectData>;
    createFileSystemDirectory(user: IUser, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData>;
    createFileSystemFile(user: IUser, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData>;
    deleteFileSystemObject(user: IUser, fileSystemObjectId: string): Promise<void>;
    getFileSystemObject(user: IUser, fileSystemObjectId: string): Promise<AnyFileSystemObjectData>;
    getFileSystemObjects(user: IUser, getFileSystemObjectsData: GetFileSystemObjectsData): Promise<AnyFileSystemObjectData[]>;
}
