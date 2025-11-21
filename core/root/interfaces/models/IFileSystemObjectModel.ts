import { type FileSystemObjectType } from '@strife/common';
import mongoose from 'mongoose';

export interface IFileSystemObject extends mongoose.Document {
  type: FileSystemObjectType;
  fileSystemId: string;
  parentId?: mongoose.Types.ObjectId;
  name: string;
}

export type IFileSystemObjectModel = mongoose.Model<IFileSystemObject>;