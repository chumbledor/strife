var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import { FileSystemControllerServiceId } from '../di/controllers/FileSystemControllerInjector.js';
import BaseRouter from '../routers/BaseRouter.js';
import { CreateFileSystemDirectorySchema, CreateFileSystemFileSchema, CreateFileSystemObjectSchema, FileSystemObjectIdSchema, FileSystemObjectType, ProjectIdSchema } from '@strife/common';
import { injectable } from 'inversify';
let FileSystemRouter = class FileSystemRouter extends BaseRouter {
    get prefix() {
        return 'projects/:projectId/fs';
    }
    async routes(instance) {
        super.routes(instance);
        instance.post('/:fileSystemObjectId', { onRequest: [instance.authenticate] }, this.createFileSystemObject.bind(this));
        instance.delete('/:fileSystemObjectId', { onRequest: [instance.authenticate] }, this.deleteFileSystemObject.bind(this));
        instance.get('/:fileSystemObjectId', { onRequest: [instance.authenticate] }, this.getFileSystemObject.bind(this));
    }
    async createFileSystemObject(request, reply) {
        const user = request.user;
        const { projectId, fileSystemObjectId } = await ProjectIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
        let data = await CreateFileSystemObjectSchema.parseAsync(request.body);
        const fileSystemController = await di.getAsync(FileSystemControllerServiceId);
        switch (data.type) {
            case FileSystemObjectType.Directory:
                const createFileSystemDirectoryData = await CreateFileSystemDirectorySchema.parseAsync(request.body);
                return await fileSystemController.createFileSystemDirectory(user, projectId, fileSystemObjectId, createFileSystemDirectoryData);
            case FileSystemObjectType.File:
                const createFileSystemFileData = await CreateFileSystemFileSchema.parseAsync(request.body);
                return await fileSystemController.createFileSystemFile(user, projectId, fileSystemObjectId, createFileSystemFileData);
            default:
                return Promise.reject();
        }
    }
    async deleteFileSystemObject(request, reply) {
        const user = request.user;
        const { projectId, fileSystemObjectId } = await ProjectIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
        const fileSystemController = await di.getAsync(FileSystemControllerServiceId);
        return fileSystemController.deleteFileSystemObject(user, projectId, fileSystemObjectId);
    }
    async getFileSystemObject(request, reply) {
        const user = request.user;
        const { projectId, fileSystemObjectId } = await ProjectIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
        const fileSystemController = await di.getAsync(FileSystemControllerServiceId);
        const data = fileSystemController.getFileSystemObject(user, projectId, fileSystemObjectId);
        return data;
    }
};
FileSystemRouter = __decorate([
    injectable()
], FileSystemRouter);
export default FileSystemRouter;
