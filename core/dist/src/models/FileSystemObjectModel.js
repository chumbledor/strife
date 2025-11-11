import { FileSystemDirectoryModelName, FileSystemObjectModelName } from '../models/ModelNames.js';
import mongoose from 'mongoose';
const fileSystemObjectOptions = {
    discriminatorKey: 'kind',
    collection: 'file_system'
};
const fileSystemObjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: FileSystemDirectoryModelName
    }
}, fileSystemObjectOptions);
export const FileSystemObjectModel = mongoose.model(FileSystemObjectModelName, fileSystemObjectSchema);
export default FileSystemObjectModel;
