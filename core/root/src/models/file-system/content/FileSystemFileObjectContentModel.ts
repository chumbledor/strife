import FileSystemFileObjectModel from '@root/src/models/file-system/FileSystemFileObjectModel.js';
import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemFileObjectContent extends mongoose.Document {
  type: FileSystem.FileContentType,
  fileSystemFileId: mongoose.Types.ObjectId;
  mimeType: string;
}

const FileSystemFileObjectContentOptions = {
  collection: 'file_system_file_content',
  discriminatorKey: FileSystem.FileContentDiscriminator
};

export const FileSystemFileObjectContentSchema = new mongoose.Schema<FileSystemFileObjectContent>(
  {
    fileSystemFileId: {
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
  FileSystemFileObjectContentOptions
);

FileSystemFileObjectContentSchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void> {
    if (!this.fileSystemFileId)
      return next();

    const fileSystemFile = await FileSystemFileObjectModel
      .findById(this.fileSystemFileId)
      .select('_id')
      .lean();

    if (!fileSystemFile)
      return next();

    await FileSystemFileObjectModel.deleteOne({ _id: this.fileSystemFileId });
    next();
  }
);

export const FileSystemFileObjectContentModel = mongoose.model<FileSystemFileObjectContent>(FileSystem.FileContentType.Unknown, FileSystemFileObjectContentSchema);
export default FileSystemFileObjectContentModel;