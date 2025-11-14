var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseController from '../controllers/BaseController.js';
import { default as FileSystemDirectoryModel, default as FileSystemFileModel } from '../models/FileSystemDirectoryModel.js';
import { FileSystemDirectorySchema, FileSystemFileSchema } from '@strife/common';
import { injectable } from 'inversify';
let FileSystemController = class FileSystemController extends BaseController {
    async createFileSystemDirectory(user, projectId, fileSystemObjectId, createFileSystemDirectoryData) {
        try {
            this.sql.project.findOneOrFail({ account: user.account, id: projectId });
        }
        catch (error) {
            return Promise.reject();
        }
        const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: fileSystemObjectId, projectId });
        if (!parentFileSystemDirectory)
            return Promise.reject();
        const fileSystemDirectory = new this.nosql.fileSystemDirectory({
            projectId,
            parentId: fileSystemObjectId,
            name: createFileSystemDirectoryData.name
        });
        fileSystemDirectory.save();
        parentFileSystemDirectory.childrenIds.push(fileSystemDirectory.id);
        parentFileSystemDirectory.save();
        return await FileSystemDirectorySchema.parseAsync(fileSystemDirectory);
    }
    async createFileSystemFile(user, projectId, fileSystemObjectId, createFileSystemFileData) {
        try {
            this.sql.project.findOneOrFail({ account: user.account, id: projectId });
        }
        catch (error) {
            return Promise.reject();
        }
        const parentFileSystemDirectory = await this.nosql.fileSystemDirectory.findOne({ _id: fileSystemObjectId, projectId });
        if (!parentFileSystemDirectory)
            return Promise.reject();
        const fileSystemFile = new this.nosql.fileSystemFile({
            projectId,
            parentId: fileSystemObjectId,
            name: createFileSystemFileData.name,
            size: createFileSystemFileData.size,
            mimeType: createFileSystemFileData.mimeType
        });
        fileSystemFile.save();
        parentFileSystemDirectory.childrenIds.push(fileSystemFile.id);
        parentFileSystemDirectory.save();
        return await FileSystemFileSchema.parseAsync(fileSystemFile);
    }
    async deleteFileSystemObject(user, projectId, fileSystemObjectId) {
        try {
            this.sql.project.findOneOrFail({ account: user.account, id: projectId });
        }
        catch (error) {
            return Promise.reject();
        }
        await this.nosql.fileSystemObject.deleteOne({ id: fileSystemObjectId });
    }
    async getFileSystemObject(user, projectId, fileSystemObjectId) {
        try {
            this.sql.project.findOneOrFail({ account: user.account, id: projectId });
        }
        catch (error) {
            return Promise.reject();
        }
        const fileSystemObject = await this.nosql.fileSystemObject.findOne({ _id: fileSystemObjectId, projectId });
        if (fileSystemObject instanceof FileSystemDirectoryModel)
            return FileSystemDirectorySchema.parseAsync(fileSystemObject);
        else if (fileSystemObject instanceof FileSystemFileModel)
            return FileSystemFileSchema.parseAsync(fileSystemObject);
        return Promise.reject();
    }
    async getFileSystemObjects(user, projectId, getFileSystemObjectsData) {
        try {
            this.sql.project.findOneOrFail({ account: user.account, id: projectId });
        }
        catch (error) {
            return Promise.reject();
        }
        const query = {
            projectId
        };
        if (getFileSystemObjectsData.ids) {
            query.id = {
                $in: getFileSystemObjectsData.ids
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
        const fileSystemObjects = await this.nosql.fileSystemObject.find(query)
            .skip(getFileSystemObjectsData.skip)
            .limit(getFileSystemObjectsData.take);
        const promises = fileSystemObjects.map(async (fileSystemObject) => {
            if (fileSystemObject instanceof FileSystemDirectoryModel)
                return FileSystemDirectorySchema.parseAsync(fileSystemObject);
            else if (fileSystemObject instanceof FileSystemFileModel)
                return FileSystemFileSchema.parseAsync(fileSystemObject);
            return undefined;
        });
        const results = await Promise.all(promises);
        return results.filter((fileSystemObject) => fileSystemObject != undefined);
    }
};
FileSystemController = __decorate([
    injectable()
], FileSystemController);
export default FileSystemController;
