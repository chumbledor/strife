import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import { FileSystemDirectoryModelName, FileSystemObjectModelName } from '@/models/ModelNames.js';
import { type IFileSystemDirectory } from '@root/interfaces/models/IFileSystemDirectoryModel.js';
import mongoose from 'mongoose';

export const FileSystemDirectorySchema = new mongoose.Schema<IFileSystemDirectory>({
  children: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: FileSystemObjectModelName
  }]
});

FileSystemDirectorySchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError) {
    await FileSystemObjectModel.deleteMany({ _id: { $in: this.children } });
    next();
  }
)

export const FileSystemDirectoryModel = FileSystemObjectModel.discriminator<IFileSystemDirectory>(FileSystemDirectoryModelName, FileSystemDirectorySchema);
export default FileSystemDirectoryModel;