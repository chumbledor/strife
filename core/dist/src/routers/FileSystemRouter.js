var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import { FileSystemControllerServiceId } from '../di/controllers/FileSystemControllerInjector.js';
import BaseRouter from '../routers/BaseRouter.js';
import { CreateFileSystemObjectSchema, FileSystemObjectIdSchema, GetFileSystemObjectsSchema } from '@strife/common';
import { injectable } from 'inversify';
let FileSystemRouter = class FileSystemRouter extends BaseRouter {
    get prefix() {
        return 'fs';
    }
    async routes(instance) {
        super.routes(instance);
        instance.post('/', { onRequest: [instance.authenticate] }, this.createFileSystemObject.bind(this));
        instance.delete('/:fileSystemObjectId', { onRequest: [instance.authenticate] }, this.deleteFileSystemObject.bind(this));
        instance.get('/:fileSystemObjectId', { onRequest: [instance.authenticate] }, this.getFileSystemObject.bind(this));
        instance.get('/', { onRequest: [instance.authenticate] }, this.getFileSystemObjects.bind(this));
    }
    async createFileSystemObject(request, reply) {
        const user = request.user;
        const createFileSystemObjectData = await CreateFileSystemObjectSchema.parseAsync(request.body);
        const fileSystemController = await di.getAsync(FileSystemControllerServiceId);
        return fileSystemController.createFileSystemObject(user, createFileSystemObjectData);
    }
    async deleteFileSystemObject(request, reply) {
        const user = request.user;
        const { fileSystemObjectId } = await FileSystemObjectIdSchema.parseAsync(request.params);
        const fileSystemController = await di.getAsync(FileSystemControllerServiceId);
        return fileSystemController.deleteFileSystemObject(user, fileSystemObjectId);
    }
    async getFileSystemObject(request, reply) {
        const user = request.user;
        const { fileSystemObjectId } = await FileSystemObjectIdSchema.parseAsync(request.params);
        const fileSystemController = await di.getAsync(FileSystemControllerServiceId);
        return fileSystemController.getFileSystemObject(user, fileSystemObjectId);
    }
    async getFileSystemObjects(request, reply) {
        const user = request.user;
        const getFileSystemObjectsData = await GetFileSystemObjectsSchema.parseAsync(request.query);
        const fileSystemController = await di.getAsync(FileSystemControllerServiceId);
        return fileSystemController.getFileSystemObjects(user, getFileSystemObjectsData);
    }
};
FileSystemRouter = __decorate([
    injectable()
], FileSystemRouter);
export default FileSystemRouter;
