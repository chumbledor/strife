import FileSystemObjectModel from '../models/FileSystemObjectModel.js';
import { FileModelName } from '../models/ModelNames.js';
import mongoose from 'mongoose';
export const FileSchema = new mongoose.Schema({
    mimeType: String
});
export const FileModel = FileSystemObjectModel.discriminator(FileModelName, FileSchema);
export default FileModel;
