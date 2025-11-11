import { type IFileSystemObject } from '../../interfaces/models/IFileSystemObjectModel.js';
import mongoose from 'mongoose';
export declare const FileSystemObjectModel: mongoose.Model<IFileSystemObject, {}, {}, {}, mongoose.Document<unknown, {}, IFileSystemObject, {}, {}> & IFileSystemObject & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export default FileSystemObjectModel;
