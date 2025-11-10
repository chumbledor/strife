import { type IFileModel } from '../../interfaces/models/IFileModel.js';
import mongoose from 'mongoose';
export declare const FileSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    mimeType?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    mimeType?: string | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    mimeType?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const FileModel: mongoose.Model<IFileModel, {}, {}, {}, mongoose.Document<unknown, {}, IFileModel, {}, {}> & IFileModel & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export default FileModel;
