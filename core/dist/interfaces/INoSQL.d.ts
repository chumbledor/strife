import { type IFileSystemDirectoryModel } from './models/IFileSystemDirectoryModel.js';
import { type IFileSystemFileModel } from './models/IFileSystemFileModel.js';
import { type IFileSystemObjectModel } from './models/IFileSystemObjectModel.js';
import { type ServiceIdentifier } from 'inversify';
import mongoose from 'mongoose';
export interface INoSQL {
    readonly odm: typeof mongoose;
    readonly fileSystemObject: IFileSystemObjectModel;
    readonly fileSystemDirectory: IFileSystemDirectoryModel;
    readonly fileSystemFile: IFileSystemFileModel;
    initialize(): Promise<void>;
    update(): Promise<void>;
}
export declare const NoSQLServiceId: ServiceIdentifier<INoSQL>;
