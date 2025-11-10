import { type IDirectoryModel } from '../models/IDirectoryModel.js';
export interface IFileSystemObjectModel {
    name: string;
    parent: IDirectoryModel;
}
