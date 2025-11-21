import FileSystemDirectoryModel from '@/models/FileSystemDirectoryModel.js';
import FileSystemFileModel from '@/models/FileSystemFileModel.js';
import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import { type INoSQL } from '@interfaces/INoSQL.js';
import { injectable } from 'inversify';
import { GridFSBucket } from 'mongodb';
import mongoose from 'mongoose';

const FileSystemBucketName = 'file_system';

@injectable()
export class NoSQL implements INoSQL {

  private _odm!: mongoose.Mongoose;
  public get odm(): mongoose.Mongoose {
    return this._odm;
  }

  private _fileSystemBucket!: GridFSBucket;
  public get fileSystemBucket(): GridFSBucket {
    return this._fileSystemBucket;
  }

  private _fileSystemObject!: typeof FileSystemObjectModel;
  public get fileSystemObject(): typeof FileSystemObjectModel {
    return this._fileSystemObject;
  }

  private _fileSystemDirectory!: typeof FileSystemDirectoryModel;
  public get fileSystemDirectory(): typeof FileSystemDirectoryModel {
    return this._fileSystemDirectory;
  }

  private _fileSystemFile!: typeof FileSystemFileModel;
  public get fileSystemFile(): typeof FileSystemFileModel {
    return this._fileSystemFile;
  }
  
  public async initialize(): Promise<void> {
    this._odm = await mongoose.connect(
      `mongodb://${process.env.NOSQL_HOST}:${process.env.NOSQL_PORT}`,
      {
        dbName: process.env.NOSQL_DATABASE,
        authSource: process.env.NOSQL_AUTH_SOURCE,
        user: process.env.NOSQL_USER,
        pass: process.env.NOSQL_PASSWORD
      }
    );

    if (!this._odm.connection.db)
      return;

    // this._fileSystemBucket = new GridFSBucket(
    //   this._odm.connection.db,
    //   { bucketName: FileSystemBucketName }
    // )
    
    this._fileSystemObject = FileSystemObjectModel;
    this._fileSystemDirectory = FileSystemDirectoryModel;
    this._fileSystemFile = FileSystemFileModel;
  }

  public async update(): Promise<void> {}

}

export default NoSQL;