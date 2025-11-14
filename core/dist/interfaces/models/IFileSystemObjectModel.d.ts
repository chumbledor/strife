import { FileSystemObjectType } from '@strife/common';
import mongoose from 'mongoose';
export interface IFileSystemObject extends mongoose.Document {
    type: FileSystemObjectType;
    projectId: string;
    parentId?: mongoose.Types.ObjectId;
    name: string;
}
export type IFileSystemObjectModel = mongoose.Model<IFileSystemObject>;
