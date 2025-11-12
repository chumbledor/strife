import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import { FileSystemDirectoryModelName, type IFileSystemDirectory } from '@interfaces/models/IFileSystemDirectoryModel.js';
import { FileSystemObjectModelName } from '@interfaces/models/IFileSystemObjectModel.js';
import mongoose from 'mongoose';

export const FileSystemDirectorySchema = new mongoose.Schema<IFileSystemDirectory>({
  childrenIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: FileSystemObjectModelName
  }]
});

FileSystemDirectorySchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError) {
    await FileSystemObjectModel.deleteMany({ _id: { $in: this.childrenIds } });
    next();
  }
)

export const FileSystemDirectoryModel = FileSystemObjectModel.discriminator<IFileSystemDirectory>(FileSystemDirectoryModelName, FileSystemDirectorySchema);
export default FileSystemDirectoryModel;