import { type IFileSystemObject } from '@interfaces/models/IFileSystemObjectModel.js';
import mongoose from 'mongoose';

export interface IFileSystemFile extends IFileSystemObject {
  size: number;
  mimeType: string;
  gridFsId: mongoose.Types.ObjectId;
}

export type IFileSystemFileModel = mongoose.Model<IFileSystemFile>;

export const FileSystemFileModelName = 'FileSystemFileModel';