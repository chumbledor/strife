import FileSystemObjectModel, { type FileSystemObject } from '@/models/file-system/FileSystemObjectModel.js';
import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemFileObject extends FileSystemObject {
  fileSystemFileObjectContentId: mongoose.Types.ObjectId;
  mimeType: string;
}

export const FileSystemFileObjectSchema = new mongoose.Schema<FileSystemFileObject>({
  fileSystemFileObjectContentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: FileSystem.FileContentType.Unknown,
    required: true
  },
  mimeType: { 
    type: String,
    required: true
  }
});

export const FileSystemFileObjectModel = FileSystemObjectModel.discriminator(FileSystem.ObjectType.File, FileSystemFileObjectSchema);
export default FileSystemFileObjectModel;