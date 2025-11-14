import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import { type IFileSystemDirectory } from '@interfaces/models/IFileSystemDirectoryModel.js';
import { FileSystemObjectType } from '@strife/common';
import mongoose from 'mongoose';

export const FileSystemDirectorySchema = new mongoose.Schema<IFileSystemDirectory>({
  childrenIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: FileSystemObjectType.Object
  }]
});

FileSystemDirectorySchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void> {
    await FileSystemObjectModel.deleteMany({ _id: { $in: this.childrenIds } });
    next();
  }
)

export const FileSystemDirectoryModel = FileSystemObjectModel.discriminator<IFileSystemDirectory>(FileSystemObjectType.Directory, FileSystemDirectorySchema);
export default FileSystemDirectoryModel;