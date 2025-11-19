import di from '@/DependencyInjection.js';
import { FileSystemControllerServiceId } from '@/di/controllers/FileSystemControllerInjector.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IFileSystemRouter } from '@interfaces/routers/IFileSystemRouter.js';
import { CreateFileSystemObjectSchema, FileSystemObjectIdSchema, GetFileSystemObjectsSchema, type AnyFileSystemObjectData, type FileSystemDirectoryData, type FileSystemFileData } from '@strife/common';
import { type FastifySchema, type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export default class FileSystemRouter extends BaseRouter implements IFileSystemRouter {

  protected override get prefix(): string | undefined {
    return 'fs';
  }

  public override async routes(instance: FastifyInstance): Promise<void> {
    super.routes(instance);
    instance.post('/', { onRequest: [ instance.authenticate ] }, this.createFileSystemObject.bind(this));
    instance.delete('/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.deleteFileSystemObject.bind(this));
    instance.get('/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.getFileSystemObject.bind(this));
    instance.get('/', { onRequest: [ instance.authenticate ] }, this.getFileSystemObjects.bind(this));
  }

  private async createFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<AnyFileSystemObjectData> {
    const user = request.user as IUser;
    const createFileSystemObjectData = await CreateFileSystemObjectSchema.parseAsync(request.body);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.createFileSystemObject(user, createFileSystemObjectData)
  }

  private async deleteFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as IUser;
    const { fileSystemObjectId } = await FileSystemObjectIdSchema.parseAsync(request.params);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.deleteFileSystemObject(user, fileSystemObjectId);
  }

  private async getFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<AnyFileSystemObjectData> {
    const user = request.user as IUser;
    const { fileSystemObjectId } = await FileSystemObjectIdSchema.parseAsync(request.params);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.getFileSystemObject(user, fileSystemObjectId);
  }

  private async getFileSystemObjects(request: FastifyRequest, reply: FastifyReply): Promise<AnyFileSystemObjectData[]> {
    const user = request.user as IUser;
    const getFileSystemObjectsData = await GetFileSystemObjectsSchema.parseAsync(request.query);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.getFileSystemObjects(user, getFileSystemObjectsData);
  }

}