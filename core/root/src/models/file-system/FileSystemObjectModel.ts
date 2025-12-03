import FileSystemDirectoryObjectModel from '@/models/file-system/FileSystemDirectoryObjectModel.js';
import { FileSystem } from '@strife/common';
import { timeStamp } from 'console';
import mongoose from 'mongoose';

export interface FileSystemObject extends mongoose.Document {
  type: FileSystem.ObjectType,
  fileSystemId: string;
  createdAt: Date,
  updatedAt: Date,
  parentFileSystemObjectId: mongoose.Types.ObjectId;
  name: string;
}

export const FileSystemObjectSchema = new mongoose.Schema<FileSystemObject>(
  {
    fileSystemId: {
      type: String,
      required: true
    },
    parentFileSystemObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FileSystem.ObjectType.Directory
    },
    name: {
      type: String,
      required: true
    }
  }, 
  {
    collection: 'file_system',
    discriminatorKey: FileSystem.ObjectDiscriminator,
    timestamps: true
  }
);

FileSystemObjectSchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void> {
    if (!this.parentFileSystemObjectId)
      return next();

    const parentFileSystemDirectoryObject = await FileSystemDirectoryObjectModel
      .findById(this.parentFileSystemObjectId)
      .select('_id')
      .lean();

    if (!parentFileSystemDirectoryObject)
      return next();

    await FileSystemDirectoryObjectModel
      .updateOne(
        { _id: this.parentFileSystemObjectId },
        { $pull: { childrenIds: this._id } }
      );
    
    next();
  }
);

export const FileSystemObjectModel = mongoose.model<FileSystemObject>(FileSystem.ObjectType.Unknown, FileSystemObjectSchema);
export default FileSystemObjectModel;