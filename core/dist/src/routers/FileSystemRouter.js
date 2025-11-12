var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import BaseRouter from '../routers/BaseRouter.js';
import { NoSQLServiceId } from '../../interfaces/INoSQL.js';
import { FileSystemRouterServiceId } from '../../interfaces/routers/IFileSystemRouter.js';
import { CreateFileSystemDirectorySchema, CreateFileSystemFileSchema, CreateFileSystemObjectSchema, FileSystemDirectorySchema, FileSystemFileSchema, FileSystemObjectIdSchema, FileSystemObjectType, ProjectIdSchema } from '@strife/common';
import { injectable } from 'inversify';
let FileSystemRouter = class FileSystemRouter extends BaseRouter {
    get prefix() {
        return 'projects/:projectId/fs';
    }
    async routes(instance) {
        super.routes(instance);
        instance.post('/:fileSystemObjectId', { onRequest: [instance.authenticate] }, this.createFileSystemObject.bind(this));
        // instance.delete('/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.deleteFileSystemObject.bind(this));
    }
    async createFileSystemObject(request, reply) {
        const user = request.user;
        const { projectId, fileSystemObjectId } = await ProjectIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
        let data = await CreateFileSystemObjectSchema.parseAsync(request.body);
        switch (data.type) {
            case FileSystemObjectType.Directory:
                const directoryData = await CreateFileSystemDirectorySchema.parseAsync(request.body);
                return await this.createFileSystemDirectory(user.account, projectId, fileSystemObjectId, directoryData);
            case FileSystemObjectType.File:
                const fileData = await CreateFileSystemFileSchema.parseAsync(request.body);
                return await this.createFileSystemFile(user.account, projectId, fileSystemObjectId, fileData);
            default:
                return Promise.reject();
        }
    }
    async createFileSystemDirectory(account, projectId, fileSystemObjectId, data) {
        const nosql = await di.getAsync(NoSQLServiceId);
        const fileSystemDirectory = new nosql.fileSystemDirectory({
            projectId,
            parentId: fileSystemObjectId,
            name: data.name
        });
        fileSystemDirectory.save();
        const fileSystemDirectoryData = await FileSystemDirectorySchema.parseAsync(fileSystemDirectory);
        return fileSystemDirectoryData;
    }
    async createFileSystemFile(account, projectId, fileSystemObjectId, data) {
        const nosql = await di.getAsync(NoSQLServiceId);
        const fileSystemFile = new nosql.fileSystemFile({
            projectId,
            parentId: fileSystemObjectId,
            name: data.name,
            size: data.size,
            mimeType: data.mimeType
        });
        fileSystemFile.save();
        const fileSystemFileData = await FileSystemFileSchema.parseAsync(fileSystemFile);
        return fileSystemFileData;
    }
};
FileSystemRouter = __decorate([
    injectable()
], FileSystemRouter);
di.bind(FileSystemRouterServiceId).to(FileSystemRouter).inSingletonScope();
