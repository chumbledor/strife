import FileSystemDirectoryObjectModel from '@/models/file-system/FileSystemDirectoryObjectModel.js';
import FileSystemFileObjectModel from '@/models/file-system/FileSystemFileObjectModel.js';
import FileSystemObjectModel from '@/models/file-system/FileSystemObjectModel.js';
import { injectable } from 'inversify';
import mongoose from 'mongoose';

@injectable()
export class NoSQL {

  private _odm!: mongoose.Mongoose;
  public get odm(): mongoose.Mongoose {
    return this._odm;
  }

  private _fileSystemObject!: typeof FileSystemObjectModel;
  public get fileSystemObject(): typeof FileSystemObjectModel {
    return this._fileSystemObject;
  }

  private _fileSystemDirectoryObject!: typeof FileSystemDirectoryObjectModel;
  public get fileSystemDirectoryObject(): typeof FileSystemDirectoryObjectModel {
    return this._fileSystemDirectoryObject;
  }

  private _fileSystemFileObject!: typeof FileSystemFileObjectModel;
  public get fileSystemFileObject(): typeof FileSystemFileObjectModel {
    return this._fileSystemFileObject;
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
    
    this._fileSystemObject = FileSystemObjectModel;
    this._fileSystemDirectoryObject = FileSystemDirectoryObjectModel;
    this._fileSystemFileObject = FileSystemFileObjectModel;
  }

  public async update(): Promise<void> {}

}

export default NoSQL;