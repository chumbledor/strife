import { type IFileSystemObjectModel } from "@interfaces/models/IFileSystemObjectModel.js";

export interface IDirectoryModel extends IFileSystemObjectModel {
  children: IFileSystemObjectModel[]
}