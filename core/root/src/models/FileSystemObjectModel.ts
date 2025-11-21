import { type IFileSystemObject } from '@interfaces/models/IFileSystemObjectModel.js';
import { FileSystemObjectType } from '@strife/common';
import mongoose from 'mongoose';

const FileSystemObjectOptions = {
  collection: 'file_system',
  discriminatorKey: 'type'
};

const FileSystemObjectSchema = new mongoose.Schema<IFileSystemObject>(
  {
    fileSystemId: {
      type: String,
      required: true
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FileSystemObjectType.Directory
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
    if (!this.parentId)
      return next();

    const parentFileSystemDirectory = await mongoose.model(FileSystemObjectType.Directory)
      .findById(this.parentId)
      .select('_id')
      .lean();

    if (!parentFileSystemDirectory)
      return next();

    await mongoose.model(FileSystemObjectType.Directory).updateOne(
      { _id: this.parentId },
      { $pull: { childrenIds: this._id } }
    );
    
    next();
  }
);

export const FileSystemObjectModel = mongoose.model<IFileSystemObject>(FileSystemObjectType.Object, FileSystemObjectSchema);
export default FileSystemObjectModel;