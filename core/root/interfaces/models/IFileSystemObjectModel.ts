import mongoose from 'mongoose';

export interface IFileSystemObject {
  projectId: string,
  parentId?: mongoose.Types.ObjectId,
  name: string
}

export type IFileSystemObjectModel = mongoose.Model<IFileSystemObject>;

export const FileSystemObjectModelName = 'FileSystemObjectModel';