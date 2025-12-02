import FileSystemFileObjectContentModel, { type FileSystemFileObjectContent } from '@/models/file-system/content/FileSystemFileObjectContentModel.js';
import { FileSystem } from '@strife/common';
import mongoose from 'mongoose';

export interface FileSystemFileObjectTextContent extends FileSystemFileObjectContent {
  text: string;
}

export const FileSystemFileObjectTextContentSchema = new mongoose.Schema<FileSystemFileObjectTextContent>({
  text: {
    type: String
  }
});

export const FileSystemFileObjectTextContentModel = FileSystemFileObjectContentModel.discriminator(FileSystem.FileContentType.Text, FileSystemFileObjectTextContentSchema);
export default FileSystemFileObjectTextContentModel;