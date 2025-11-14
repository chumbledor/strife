import BaseController from '../controllers/BaseController.js';
import { type IFileSystemController } from '../../interfaces/controllers/IFileSystemController.js';
import { type IUser } from '../../interfaces/IUser.js';
import { type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';
export default class FileSystemController extends BaseController implements IFileSystemController {
    createFileSystemDirectory(user: IUser, projectId: string, fileSystemObjectId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData>;
    createFileSystemFile(user: IUser, projectId: string, fileSystemObjectId: string, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData>;
    deleteFileSystemObject(user: IUser, projectId: string, fileSystemObjectId: string): Promise<void>;
    getFileSystemObject(user: IUser, projectId: string, fileSystemObjectId: string): Promise<FileSystemDirectoryData | FileSystemFileData>;
    getFileSystemObjects(user: IUser, projectId: string, getFileSystemObjectsData: GetFileSystemObjectsData): Promise<(FileSystemDirectoryData | FileSystemFileData)[]>;
}
