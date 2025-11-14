import { type IFileSystemDirectory } from '../../interfaces/models/IFileSystemDirectoryModel.js';
import mongoose from 'mongoose';
export declare const FileSystemDirectorySchema: mongoose.Schema<IFileSystemDirectory, mongoose.Model<IFileSystemDirectory, any, any, any, mongoose.Document<unknown, any, IFileSystemDirectory, any, {}> & IFileSystemDirectory & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IFileSystemDirectory, mongoose.Document<unknown, {}, mongoose.FlatRecord<IFileSystemDirectory>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IFileSystemDirectory> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare const FileSystemDirectoryModel: mongoose.Model<IFileSystemDirectory, {}, {}, {}, mongoose.Document<unknown, {}, IFileSystemDirectory, {}, {}> & IFileSystemDirectory & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default FileSystemDirectoryModel;
