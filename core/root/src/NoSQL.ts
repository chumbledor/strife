import di from '@/DependencyInjection.js';
import FileSystemDirectoryModel from '@/models/FileSystemDirectoryModel.js';
import FileSystemFileModel from '@/models/FileSystemFileModel.js';
import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import { type IApp } from '@interfaces/IApp.js';
import { NoSQLServiceId, type INoSQL } from '@interfaces/INoSQL.js';
import { injectable } from 'inversify';
import mongoose from 'mongoose';

@injectable()
class NoSQL implements INoSQL {

  private _odm!: typeof mongoose;
  public get odm(): typeof mongoose {
    return this._odm;
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

  private _app!: IApp;
  
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

    this._fileSystemObject = FileSystemObjectModel;
    this._fileSystemDirectory = FileSystemDirectoryModel;
    this._fileSystemFile = FileSystemFileModel;
  }

  public async update(): Promise<void> {}

}

di.bind(NoSQLServiceId).to(NoSQL).inSingletonScope();