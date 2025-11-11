import { type IFileSystemObject } from '@interfaces/models/IFileSystemObjectModel.js';
import mongoose from "mongoose";

export interface IFileSystemFile extends IFileSystemObject {
  mimeType: string;
}

export type IFileSystemFileModel = mongoose.Model<IFileSystemFile>;