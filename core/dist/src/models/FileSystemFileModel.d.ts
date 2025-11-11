import { type IFileSystemFile } from '../../interfaces/models/IFileSystemFileModel.js';
import mongoose from 'mongoose';
export declare const FileSystemFileSchema: mongoose.Schema<IFileSystemFile, mongoose.Model<IFileSystemFile, any, any, any, mongoose.Document<unknown, any, IFileSystemFile, any, {}> & IFileSystemFile & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IFileSystemFile, mongoose.Document<unknown, {}, mongoose.FlatRecord<IFileSystemFile>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IFileSystemFile> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const FileSystemFileModel: mongoose.Model<IFileSystemFile, {}, {}, {}, mongoose.Document<unknown, {}, IFileSystemFile, {}, {}> & IFileSystemFile & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export default FileSystemFileModel;
