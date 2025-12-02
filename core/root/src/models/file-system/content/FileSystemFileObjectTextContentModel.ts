import FileSystemFileObjectContentModel, { type FileSystemFileObjectContent } from '@root/src/models/file-system/content/FileSystemFileObjectContentModel.js';
import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemFileTextContent extends FileSystemFileObjectContent {
  text: string;
}

export const FileSystemFileTextContentSchema = new mongoose.Schema<FileSystemFileTextContent>({
  text: {
    type: String
  }
});

export const FileSystemFileTextContentModel = FileSystemFileObjectContentModel.discriminator(FileSystem.FileContentType.Text, FileSystemFileTextContentSchema);
export default FileSystemFileTextContentModel;