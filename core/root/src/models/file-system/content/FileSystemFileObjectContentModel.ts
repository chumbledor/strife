import FileSystemFileObjectModel from '@/models/file-system/FileSystemFileObjectModel.js';
import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemFileObjectContent extends mongoose.Document {
  type: FileSystem.FileContentType,
  fileSystemFileObjectId: mongoose.Types.ObjectId;
  mimeType: string;
}

export const FileSystemFileObjectContentSchema = new mongoose.Schema<FileSystemFileObjectContent>(
  {
    fileSystemFileObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FileSystem.ObjectType.File,
      required: true
    },
    mimeType: {
      type: String,
      default: 'text/plain',
      required: true
    }
  }, 
  {
    collection: 'file_system_file_content',
    discriminatorKey: FileSystem.FileContentDiscriminator,
    timestamps: true
  }
);

FileSystemFileObjectContentSchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void> {
    if (!this.fileSystemFileObjectId)
      return next();

    const fileSystemFileObject = await FileSystemFileObjectModel
      .findById(this.fileSystemFileObjectId)
      .select('_id')
      .lean();

    if (!fileSystemFileObject)
      return next();

    await FileSystemFileObjectModel.deleteOne({ _id: this.fileSystemFileObjectId });
    next();
  }
);

export const FileSystemFileObjectContentModel = mongoose.model<FileSystemFileObjectContent>(FileSystem.FileContentType.Unknown, FileSystemFileObjectContentSchema);
export default FileSystemFileObjectContentModel;