import FileSystemObjectModel from '../models/FileSystemObjectModel.js';
import { FileSystemFileModelName } from '../models/ModelNames.js';
import mongoose from 'mongoose';
export const FileSystemFileSchema = new mongoose.Schema({
    mimeType: String
});
export const FileSystemFileModel = FileSystemObjectModel.discriminator(FileSystemFileModelName, FileSystemFileSchema);
export default FileSystemFileModel;
