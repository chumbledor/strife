import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import { FileSystemFileModelName, type IFileSystemFile } from '@interfaces/models/IFileSystemFileModel.js';
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

FileSystemFileSchema.methods.save = function () {
  
}

export const FileSystemFileModel = FileSystemObjectModel.discriminator<IFileSystemFile>(FileSystemFileModelName, FileSystemFileSchema);
export default FileSystemFileModel;