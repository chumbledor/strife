import FileSystemFileObjectBinaryContentModel from '@root/src/models/file-system/content/FileSystemFileObjectBinaryContentModel.js';
import FileSystemFileContentVersionModel, { type FileSystemFileObjectContentVersion } from '@root/src/models/file-system/content/version/FileSystemFileObjectContentVersionModel.js';
import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemFileObjectBinaryContentVersion extends FileSystemFileObjectContentVersion {
  bucket: string;
  key: string;
  versionId: string;
  etag: string;
  contentType: string;
  size: number;
}

export const FileSystemFileObjectBinaryContentVersionSchema = new mongoose.Schema<FileSystemFileObjectBinaryContentVersion>({
  bucket: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  },
  versionId: {
    type: String,
    required: true
  },
  etag: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  }
});

FileSystemFileObjectBinaryContentVersionSchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void> {
    if (!this.fileSystemFileObjectBinaryContentId)
      return next();

    const fileSystemFileObjectBinaryContent = await FileSystemFileObjectBinaryContentModel
      .findById(this.fileSystemFileObjectBinaryContentId)
      .select('_id')
      .lean();

    if (!fileSystemFileObjectBinaryContent)
      return next();

    await FileSystemFileObjectBinaryContentModel
      .updateOne(
        { _id: this.fileSystemFileObjectBinaryContentId },
        { $pull: { fileSystemFileObjectContentVersionIds: this._id } }
      );

    next();
  }
);

export const FileSystemFileObjectBinaryContentVersionModel = FileSystemFileContentVersionModel.discriminator(FileSystem.FileContentVersionType.Binary, FileSystemFileObjectBinaryContentVersionSchema);
export default FileSystemFileObjectBinaryContentVersionModel;