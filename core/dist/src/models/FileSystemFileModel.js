import FileSystemObjectModel from '../models/FileSystemObjectModel.js';
import { FileSystemFileModelName } from '../../interfaces/models/IFileSystemFileModel.js';
import mongoose from 'mongoose';
export const FileSystemFileSchema = new mongoose.Schema({
    size: {
        type: Number,
        default: 0
    },
    mimeType: {
        type: String,
        required: true
    },
    gridFsId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});
FileSystemFileSchema.methods.save = function () {
};
export const FileSystemFileModel = FileSystemObjectModel.discriminator(FileSystemFileModelName, FileSystemFileSchema);
export default FileSystemFileModel;
