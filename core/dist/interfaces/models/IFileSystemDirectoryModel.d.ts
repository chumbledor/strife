import { type IFileSystemObject } from '../models/IFileSystemObjectModel.js';
import mongoose from 'mongoose';
export interface IFileSystemDirectory extends IFileSystemObject {
    childrenIds: mongoose.Types.ObjectId[];
}
export type IFileSystemDirectoryModel = mongoose.Model<IFileSystemDirectory>;
export declare const FileSystemDirectoryModelName = "FileSystemDirectoryModel";
