import FileSystemFileObjectContentModel, { type FileSystemFileObjectContent } from '@/models/file-system/content/FileSystemFileObjectContentModel.js';
import FileSystemFileObjectBinaryContentVersionModel from '@/models/file-system/content/version/FileSystemFileObjectBinaryContentVersionModel.js';
import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemFileObjectBinaryContent extends FileSystemFileObjectContent {
  currentFileSystemFileObjectContentVersionId: mongoose.Types.ObjectId,
  fileSystemFileObjectContentVersionIds: mongoose.Types.ObjectId[]
}

export const FileSystemFileObjectBinaryContentSchema = new mongoose.Schema<FileSystemFileObjectBinaryContent>({
  currentFileSystemFileObjectContentVersionId: {
    type: mongoose.Schema.ObjectId,
    ref: FileSystem.FileContentVersionType.Binary
  },
  fileSystemFileObjectContentVersionIds: [{
    type: mongoose.Schema.ObjectId,
    ref: FileSystem.FileContentVersionType.Binary
  }]
});

FileSystemFileObjectBinaryContentSchema.pre(
  'deleteOne', 
  { document: true, query: false }, 
  async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void> {
    await FileSystemFileObjectBinaryContentVersionModel.deleteMany({ _id: { $in: this.fileSystemFileObjectContentVersionIds } });
    next();
  }
)

export const FileSystemFileObjectBinaryContentModel = FileSystemFileObjectContentModel.discriminator(FileSystem.FileContentType.Binary, FileSystemFileObjectBinaryContentSchema);
export default FileSystemFileObjectBinaryContentModel;