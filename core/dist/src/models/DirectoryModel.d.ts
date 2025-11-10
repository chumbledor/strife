import { type IDirectoryModel } from '../../interfaces/models/IDirectoryModel.js';
import mongoose from 'mongoose';
export declare const DirectorySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    children: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    children: mongoose.Types.ObjectId[];
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    children: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const DirectoryModel: mongoose.Model<IDirectoryModel, {}, {}, {}, mongoose.Document<unknown, {}, IDirectoryModel, {}, {}> & IDirectoryModel & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export default DirectoryModel;
