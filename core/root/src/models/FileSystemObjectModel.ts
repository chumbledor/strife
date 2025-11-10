import { DirectoryModelName, FileSystemObjectModelName } from '@/models/ModelNames.js';
import { type IFileSystemObjectModel } from '@interfaces/models/IFileSystemObjectModel.js';
import mongoose from 'mongoose';

const fileSystemObjectOptions = {
  discriminatorKey: 'kind',
  collection: 'file_system'
}

const fileSystemObjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: DirectoryModelName
    }
  }, 
  fileSystemObjectOptions
);

export const FileSystemObject = mongoose.model<IFileSystemObjectModel>(FileSystemObjectModelName, fileSystemObjectSchema);
export default FileSystemObject;