import { FileSystemDirectoryModelName, FileSystemObjectModelName } from '@/models/ModelNames.js';
import { type IFileSystemObject } from '@root/interfaces/models/IFileSystemObjectModel.js';
import mongoose from 'mongoose';

const fileSystemObjectOptions = {
  discriminatorKey: 'kind',
  collection: 'file_system'
}

const fileSystemObjectSchema = new mongoose.Schema<IFileSystemObject>(
  {
    name: {
      type: String,
      required: true
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FileSystemDirectoryModelName
    }
  }, 
  fileSystemObjectOptions
);

export const FileSystemObjectModel = mongoose.model<IFileSystemObject>(FileSystemObjectModelName, fileSystemObjectSchema);
export default FileSystemObjectModel;

