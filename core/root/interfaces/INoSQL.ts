import { type IFileSystemDirectoryModel } from '@interfaces/models/IFileSystemDirectoryModel.js';
import { type IFileSystemFileModel } from '@interfaces/models/IFileSystemFileModel.js';
import { type IFileSystemObjectModel } from '@interfaces/models/IFileSystemObjectModel.js';
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

export const NoSQLServiceId: ServiceIdentifier<INoSQL> = Symbol.for('NoSQLServiceId');