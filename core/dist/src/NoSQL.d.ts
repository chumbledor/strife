import FileSystemDirectoryModel from './models/FileSystemDirectoryModel.js';
import FileSystemFileModel from './models/FileSystemFileModel.js';
import FileSystemObjectModel from './models/FileSystemObjectModel.js';
import { type INoSQL } from '../interfaces/INoSQL.js';
import { GridFSBucket } from 'mongodb';
import mongoose from 'mongoose';
export default class NoSQL implements INoSQL {
    private _odm;
    get odm(): mongoose.Mongoose;
    private _fileSystemBucket;
    get fileSystemBucket(): GridFSBucket;
    private _fileSystemObject;
    get fileSystemObject(): typeof FileSystemObjectModel;
    private _fileSystemDirectory;
    get fileSystemDirectory(): typeof FileSystemDirectoryModel;
    private _fileSystemFile;
    get fileSystemFile(): typeof FileSystemFileModel;
    initialize(): Promise<void>;
    update(): Promise<void>;
}
