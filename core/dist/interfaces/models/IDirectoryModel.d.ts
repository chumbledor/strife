import { type IFileSystemObjectModel } from "../models/IFileSystemObjectModel.js";
export interface IDirectoryModel extends IFileSystemObjectModel {
    children: IFileSystemObjectModel[];
}
