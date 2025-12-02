import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemFileObjectContentVersion {
  fileSystemFileObjectBinaryContentId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const FileSystemFileObjectContentVersionOptions = {
  collection: 'file_system_file_content_version',
  discriminatorKey: FileSystem.FileContentVersionDiscriminator
};

export const FileSystemFileObjectContentVersionSchema = new mongoose.Schema<FileSystemFileObjectContentVersion>(
  {
    fileSystemFileObjectBinaryContentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FileSystem.FileContentType.Binary,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.UTC,
      required: true
    },
  },
  FileSystemFileObjectContentVersionOptions
);

export const FileSystemFileObjectBinaryContentVersionModel = mongoose.model<FileSystemFileObjectContentVersion>(FileSystem.FileContentVersionType.Unknown, FileSystemFileObjectContentVersionSchema);
export default FileSystemFileObjectBinaryContentVersionModel;