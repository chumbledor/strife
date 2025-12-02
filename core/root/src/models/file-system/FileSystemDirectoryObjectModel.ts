import FileSystemObjectModel, { type FileSystemObject } from '@/models/file-system/FileSystemObjectModel.js';
import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemDirectoryObject extends FileSystemObject {
  childrenFileSystemObjectIds: mongoose.Types.ObjectId[];
}

export const FileSystemDirectoryObjectSchema = new mongoose.Schema<FileSystemDirectoryObject>({
  childrenFileSystemObjectIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: FileSystem.ObjectType.Unknown
  }]
});

FileSystemDirectoryObjectSchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void> {
    await FileSystemObjectModel.deleteMany({ _id: { $in: this.childrenFileSystemObjectIds } });
    next();
  }
)

export const FileSystemDirectoryObjectModel = FileSystemObjectModel.discriminator(FileSystem.ObjectType.Directory, FileSystemDirectoryObjectSchema);
export default FileSystemDirectoryObjectModel;