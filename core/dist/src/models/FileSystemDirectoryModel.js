import FileSystemObjectModel from '../models/FileSystemObjectModel.js';
import { FileSystemDirectoryModelName, FileSystemObjectModelName } from '../models/ModelNames.js';
import mongoose from 'mongoose';
export const FileSystemDirectorySchema = new mongoose.Schema({
    children: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: FileSystemObjectModelName
        }]
});
FileSystemDirectorySchema.pre('deleteOne', { document: true, query: false }, async function (next) {
    await FileSystemObjectModel.deleteMany({ _id: { $in: this.children } });
    next();
});
export const FileSystemDirectoryModel = FileSystemObjectModel.discriminator(FileSystemDirectoryModelName, FileSystemDirectorySchema);
export default FileSystemDirectoryModel;
