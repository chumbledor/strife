import BaseController from '../controllers/BaseController.js';
import { type IFileSystemController } from '../../interfaces/controllers/IFileSystemController.js';
import { type IUser } from '../../interfaces/IUser.js';
import { type IFileSystemObject } from '../../interfaces/models/IFileSystemObjectModel.js';
import { CreateFileSystemObjectData, type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';
import mongoose from 'mongoose';
export default class FileSystemController extends BaseController implements IFileSystemController {
    existsFileSystemObject(query: mongoose.FilterQuery<IFileSystemObject>): Promise<boolean>;
    createFileSystemObject(user: IUser, createFileSystemObjectData: CreateFileSystemObjectData): Promise<AnyFileSystemObjectData>;
    createFileSystemDirectory(user: IUser, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData>;
    createFileSystemFile(user: IUser, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData>;
    deleteFileSystemObject(user: IUser, fileSystemObjectId: string): Promise<void>;
    getFileSystemObject(user: IUser, fileSystemObjectId: string): Promise<AnyFileSystemObjectData>;
    getFileSystemObjects(user: IUser, getFileSystemObjectsData: GetFileSystemObjectsData): Promise<AnyFileSystemObjectData[]>;
}
