import { type IFileSystemObjectModel } from '../models/IFileSystemObjectModel.js';
export interface IFileModel extends IFileSystemObjectModel {
    mimeType: string;
}
