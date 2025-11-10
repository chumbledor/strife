import { type IDirectoryModel } from '../models/IDirectoryModel.js';
import { type IFileSystemObjectModel } from '../models/IFileSystemObjectModel.js';
export interface IFileModel extends IFileSystemObjectModel {
    directory: IDirectoryModel;
}
