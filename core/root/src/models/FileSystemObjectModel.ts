import { FileSystemDirectoryModelName } from '@interfaces/models/IFileSystemDirectoryModel.js';
import { FileSystemObjectModelName, type IFileSystemObject } from '@interfaces/models/IFileSystemObjectModel.js';
import mongoose from 'mongoose';

const fileSystemObjectOptions = {
  collection: 'file_system',
  discriminatorKey: 'type'
}

const fileSystemObjectSchema = new mongoose.Schema<IFileSystemObject>(
  {
    projectId: {
      type: String,
      required: true
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FileSystemDirectoryModelName
    },
    name: {
      type: String,
      required: true
    }
  }, 
  fileSystemObjectOptions
);

export const FileSystemObjectModel = mongoose.model<IFileSystemObject>(FileSystemObjectModelName, fileSystemObjectSchema);
export default FileSystemObjectModel;