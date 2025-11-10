import { type IFileSystemObjectModel } from '../../interfaces/models/IFileSystemObjectModel.js';
import mongoose from 'mongoose';
export declare const FileSystemObject: mongoose.Model<IFileSystemObjectModel, {}, {}, {}, mongoose.Document<unknown, {}, IFileSystemObjectModel, {}, {}> & IFileSystemObjectModel & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export default FileSystemObject;
