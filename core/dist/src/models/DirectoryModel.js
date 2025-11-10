import FileSystemObjectModel from '../models/FileSystemObjectModel.js';
import { DirectoryModelName, FileSystemObjectModelName } from '../models/ModelNames.js';
import mongoose from 'mongoose';
export const DirectorySchema = new mongoose.Schema({
    children: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: FileSystemObjectModelName
        }]
});
export const DirectoryModel = FileSystemObjectModel.discriminator(DirectoryModelName, DirectorySchema);
export default DirectoryModel;
