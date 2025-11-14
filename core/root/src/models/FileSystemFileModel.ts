import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import { type IFileSystemFile } from '@interfaces/models/IFileSystemFileModel.js';
import { FileSystemObjectType } from '@strife/common';
import mongoose from 'mongoose';

export const FileSystemFileSchema = new mongoose.Schema<IFileSystemFile>({
  size: {
    type: Number,
    default: 0
  },
  mimeType: { 
    type: String,
    required: true
  },
  gridFsId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

export const FileSystemFileModel = FileSystemObjectModel.discriminator<IFileSystemFile>(FileSystemObjectType.File, FileSystemFileSchema);
export default FileSystemFileModel;