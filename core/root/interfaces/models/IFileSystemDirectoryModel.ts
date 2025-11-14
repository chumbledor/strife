import { type IFileSystemObject } from '@interfaces/models/IFileSystemObjectModel.js';
import mongoose from 'mongoose';

export interface IFileSystemDirectory extends IFileSystemObject {
  childrenIds: mongoose.Types.ObjectId[];
}

export type IFileSystemDirectoryModel = mongoose.Model<IFileSystemDirectory>;