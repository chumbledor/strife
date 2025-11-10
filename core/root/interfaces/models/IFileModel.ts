import { type IDirectoryModel } from '@interfaces/models/IDirectoryModel.js';
import { type IFileSystemObjectModel } from '@interfaces/models/IFileSystemObjectModel.js';

export interface IFileModel extends IFileSystemObjectModel {
  directory: IDirectoryModel
}