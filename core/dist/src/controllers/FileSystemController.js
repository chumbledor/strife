var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseController from '../controllers/BaseController.js';
import FileSystemDirectoryModel from '../models/FileSystemDirectoryModel.js';
import FileSystemFileModel from '../models/FileSystemFileModel.js';
import { Algorithms, CreateFileSystemDirectorySchema, CreateFileSystemFileSchema, FileSystemDirectorySchema, FileSystemFileSchema, FileSystemObjectType } from '@strife/common';
import { injectable } from 'inversify';
import mongoose from 'mongoose';
let FileSystemController = class FileSystemController extends BaseController {
    async existsFileSystemObject(query) {
        query = {
            ...query
        };
        const count = await this.nosql.fileSystemObject
            .find(query)
            .countDocuments();
        return count > 0;
    }
    async createFileSystemObject(user, createFileSystemObjectData) {
        if (createFileSystemObjectData.type == FileSystemObjectType.Directory) {
            const createFileSystemDirectoryData = await CreateFileSystemDirectorySchema.parseAsync(createFileSystemObjectData);
            return this.createFileSystemDirectory(user, createFileSystemDirectoryData);
        }
        else if (createFileSystemObjectData.type == FileSystemObjectType.File) {
            const createFileSystemFileData = await CreateFileSystemFileSchema.parseAsync(createFileSystemObjectData);
            return this.createFileSystemFile(user, createFileSystemFileData);
        }
        return Promise.reject();
    }
    async createFileSystemDirectory(user, createFileSystemDirectoryData) {
        try {
            await this.sql.project.findOneOrFail({ account: user.account, id: createFileSystemDirectoryData.projectId });
        }
        catch (error) {
            return Promise.reject();
        }
        const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: createFileSystemDirectoryData.parentId, projectId: createFileSystemDirectoryData.projectId });
        if (!parentFileSystemDirectory)
            return Promise.reject();
        const fileSystemDirectory = new this.nosql.fileSystemDirectory({
            projectId: createFileSystemDirectoryData.projectId,
            parentId: createFileSystemDirectoryData.parentId,
            name: createFileSystemDirectoryData.name
        });
        fileSystemDirectory.save();
        parentFileSystemDirectory.childrenIds.push(fileSystemDirectory.id);
        parentFileSystemDirectory.save();
        return await FileSystemDirectorySchema.parseAsync(fileSystemDirectory);
    }
    async createFileSystemFile(user, createFileSystemFileData) {
        try {
            await this.sql.project.findOneOrFail({ account: user.account, id: createFileSystemFileData.projectId });
        }
        catch (error) {
            return Promise.reject();
        }
        const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: createFileSystemFileData.parentId, projectId: createFileSystemFileData.projectId });
        if (!parentFileSystemDirectory)
            return Promise.reject();
        const fileSystemFile = new this.nosql.fileSystemFile({
            projectId: createFileSystemFileData.projectId,
            parentId: createFileSystemFileData.parentId,
            name: createFileSystemFileData.name,
            size: createFileSystemFileData.size,
            mimeType: createFileSystemFileData.mimeType
        });
        fileSystemFile.save();
        parentFileSystemDirectory.childrenIds.push(fileSystemFile.id);
        parentFileSystemDirectory.save();
        return await FileSystemFileSchema.parseAsync(fileSystemFile);
    }
    async deleteFileSystemObject(user, fileSystemObjectId) {
        const fileSystemObject = await this.nosql.fileSystemObject.findOne({ id: fileSystemObjectId });
        if (!fileSystemObject)
            return Promise.reject();
        if (await fileSystemObject.hasPermission(user))
            return Promise.reject();
        await fileSystemObject.deleteOne();
    }
    async getFileSystemObject(user, fileSystemObjectId) {
        const fileSystemObject = await this.nosql.fileSystemObject.findOne({ id: fileSystemObjectId });
        if (!fileSystemObject)
            return Promise.reject();
        if (await fileSystemObject.hasPermission(user))
            return Promise.reject();
        if (fileSystemObject instanceof FileSystemDirectoryModel)
            return FileSystemDirectorySchema.parseAsync(fileSystemObject);
        else if (fileSystemObject instanceof FileSystemFileModel)
            return FileSystemFileSchema.parseAsync(fileSystemObject);
        return Promise.reject();
    }
    async getFileSystemObjects(user, getFileSystemObjectsData) {
        // If we specified a projectId in the data, verify that the user has permission to view file system objects from that project
        if (getFileSystemObjectsData.projectId) {
            try {
                await this.sql.project.findOneOrFail({ account: user.account, id: getFileSystemObjectsData.projectId });
            }
            catch (error) {
                return Promise.reject();
            }
        }
        const query = {};
        if (getFileSystemObjectsData.projectId) {
            query.projectId = getFileSystemObjectsData.projectId;
        }
        console.log(`\n${JSON.stringify(getFileSystemObjectsData.ids)}\n`);
        if (getFileSystemObjectsData.ids) {
            query._id = {
                $in: getFileSystemObjectsData.ids.map((id) => new mongoose.Types.ObjectId(id))
            };
        }
        if (getFileSystemObjectsData.parentId) {
            query.parentId = getFileSystemObjectsData.parentId;
        }
        if (getFileSystemObjectsData.name) {
            query.name = {
                $regex: getFileSystemObjectsData.name,
                $options: 'i'
            };
        }
        let fileSystemObjects = await this.nosql.fileSystemObject.find(query)
            .skip(getFileSystemObjectsData.skip)
            .limit(getFileSystemObjectsData.take);
        // If we did not specify a projectId in the data, verify that the user has permission to view each file system object
        // WARNING: This could be very expensive
        if (!getFileSystemObjectsData.projectId) {
            fileSystemObjects = await Algorithms.filterAsync(fileSystemObjects, (fileSystemObject) => fileSystemObject.hasPermission(user));
        }
        const promises = fileSystemObjects.map(async (fileSystemObject) => {
            if (fileSystemObject.type == FileSystemObjectType.Directory)
                return FileSystemDirectorySchema.parseAsync(fileSystemObject);
            else if (fileSystemObject.type == FileSystemObjectType.File)
                return FileSystemFileSchema.parseAsync(fileSystemObject);
            else
                return Promise.reject();
        });
        return Promise.all(promises);
    }
};
FileSystemController = __decorate([
    injectable()
], FileSystemController);
export default FileSystemController;
