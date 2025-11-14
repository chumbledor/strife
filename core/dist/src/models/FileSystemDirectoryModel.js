import FileSystemObjectModel from '../models/FileSystemObjectModel.js';
import { FileSystemObjectType } from '@strife/common';
import mongoose from 'mongoose';
export const FileSystemDirectorySchema = new mongoose.Schema({
    childrenIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: FileSystemObjectType.Object
        }]
});
FileSystemDirectorySchema.pre('deleteOne', { document: true, query: false }, async function (next) {
    await FileSystemObjectModel.deleteMany({ _id: { $in: this.childrenIds } });
    next();
});
export const FileSystemDirectoryModel = FileSystemObjectModel.discriminator(FileSystemObjectType.Directory, FileSystemDirectorySchema);
export default FileSystemDirectoryModel;
