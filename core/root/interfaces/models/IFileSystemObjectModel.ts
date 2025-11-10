import { type IDirectoryModel } from '@interfaces/models/IDirectoryModel.js';

export interface IFileSystemObjectModel {
  name: string,
  parent: IDirectoryModel
}