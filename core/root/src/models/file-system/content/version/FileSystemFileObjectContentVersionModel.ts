import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemFileObjectContentVersion {
  fileSystemFileObjectContentId: mongoose.Types.ObjectId;
}

export const FileSystemFileObjectContentVersionSchema = new mongoose.Schema<FileSystemFileObjectContentVersion>(
  {
    fileSystemFileObjectContentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FileSystem.FileContentType.Binary,
      required: true
    }
  },
  {
    collection: 'file_system_file_content_version',
    discriminatorKey: FileSystem.FileContentVersionDiscriminator,
    timestamps: true
  }
);

export const FileSystemFileObjectBinaryContentVersionModel = mongoose.model<FileSystemFileObjectContentVersion>(FileSystem.FileContentVersionType.Unknown, FileSystemFileObjectContentVersionSchema);
export default FileSystemFileObjectBinaryContentVersionModel;