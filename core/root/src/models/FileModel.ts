import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import { FileModelName } from '@/models/ModelNames.js';
import { type IFileModel } from '@interfaces/models/IFileModel.js';
import mongoose from 'mongoose';

export const FileSchema = new mongoose.Schema({
  mimeType: String
});

export const FileModel = FileSystemObjectModel.discriminator<IFileModel>(FileModelName, FileSchema);
export default FileModel;