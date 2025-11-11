import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import { FileSystemFileModelName } from '@/models/ModelNames.js';
import { type IFileSystemFile } from '@root/interfaces/models/IFileSystemFileModel.js';
import mongoose from 'mongoose';

export const FileSystemFileSchema = new mongoose.Schema<IFileSystemFile>({
  mimeType: String
});

export const FileSystemFileModel = FileSystemObjectModel.discriminator<IFileSystemFile>(FileSystemFileModelName, FileSystemFileSchema);
export default FileSystemFileModel;