import { type IFileSystemDirectoryModel } from './models/IFileSystemDirectoryModel.js';
import { type IFileSystemFileModel } from './models/IFileSystemFileModel.js';
import { type IFileSystemObjectModel } from './models/IFileSystemObjectModel.js';
import { type GridFSBucket } from 'mongodb';
import mongoose from 'mongoose';
export interface INoSQL {
    readonly odm: mongoose.Mongoose;
    readonly fileSystemBucket: GridFSBucket;
    readonly fileSystemObject: IFileSystemObjectModel;
    readonly fileSystemDirectory: IFileSystemDirectoryModel;
    readonly fileSystemFile: IFileSystemFileModel;
    initialize(): Promise<void>;
    update(): Promise<void>;
}
