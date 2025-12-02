import FileSystemDirectoryObjectModel from '@/models/file-system/FileSystemDirectoryObjectModel.js';
import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemObject extends mongoose.Document {
  type: FileSystem.ObjectType,
  fileSystemId: string;
  createdAt: Date,
  updatedAt: Date,
  parentFileSystemDirectoryObjectId: mongoose.Types.ObjectId;
  name: string;
}

const FileSystemObjectOptions = {
  collection: 'file_system',
  discriminatorKey: FileSystem.ObjectDiscriminator
};

export const FileSystemObjectSchema = new mongoose.Schema<FileSystemObject>(
  {
    fileSystemId: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.UTC,
      required: true
    },
    updatedAt: {
      type: Date,
      default: Date.UTC,
      required: true
    },
    parentFileSystemDirectoryObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FileSystem.ObjectType.Directory
    },
    name: {
      type: String,
      required: true
    }
  }, 
  FileSystemObjectOptions
);

FileSystemObjectSchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void> {
    if (!this.parentFileSystemDirectoryObjectId)
      return next();

    const parentFileSystemDirectoryObject = await FileSystemDirectoryObjectModel
      .findById(this.parentFileSystemDirectoryObjectId)
      .select('_id')
      .lean();

    if (!parentFileSystemDirectoryObject)
      return next();

    await FileSystemDirectoryObjectModel
      .updateOne(
        { _id: this.parentFileSystemDirectoryObjectId },
        { $pull: { childrenIds: this._id } }
      );
    
    next();
  }
);

export const FileSystemObjectModel = mongoose.model<FileSystemObject>(FileSystem.ObjectType.Unknown, FileSystemObjectSchema);
export default FileSystemObjectModel;