import { type IUser } from '@interfaces/IUser.js';
import { type FileSystemObjectType } from '@strife/common';
import mongoose from 'mongoose';

export interface IFileSystemObject extends mongoose.Document {
  type: FileSystemObjectType;
  projectId: string;
  parentId?: mongoose.Types.ObjectId;
  name: string;
  hasPermission: (user: IUser) => Promise<boolean>;
}

export type IFileSystemObjectModel = mongoose.Model<IFileSystemObject>;