import { type IFileSystemDirectory } from '../models/IFileSystemDirectoryModel.js';
import mongoose from 'mongoose';
export interface IFileSystemObject {
    name: string;
    parent?: IFileSystemDirectory;
}
export type IFileSystemObjectModel = mongoose.Model<IFileSystemObject>;
