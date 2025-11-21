import di from '@/DependencyInjection.js';
import { FileSystemControllerServiceId } from '@/di/controllers/FileSystemControllerInjector.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IFileSystemRouter } from '@interfaces/routers/IFileSystemRouter.js';
import { CreateFileSystemObjectSchema, FileSystemIdSchema, FileSystemObjectIdSchema, GetFileSystemObjectsSchema, type AnyFileSystemObjectData } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export class FileSystemRouter extends BaseRouter implements IFileSystemRouter {

  protected override get prefix(): string | undefined {
    return 'filesystems';
  }

  public override async routes(instance: FastifyInstance): Promise<void> {
    super.routes(instance);
    instance.post('/:fileSystemId', { onRequest: [ instance.authenticate ] }, this.createFileSystemObject.bind(this));
    instance.delete('/:fileSystemId/objects/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.deleteFileSystemObject.bind(this));
    instance.get('/:fileSystemId/objects/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.getFileSystemObject.bind(this));
    instance.get('/:fileSystemId', { onRequest: [ instance.authenticate ] }, this.getFileSystemObjects.bind(this));
  }

  private async createFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<AnyFileSystemObjectData> {
    const user = request.user as IUser;
    const { fileSystemId } = await FileSystemIdSchema.parseAsync(request.params);
    const createFileSystemObjectData = await CreateFileSystemObjectSchema.parseAsync(request.body);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.createFileSystemObject(user, fileSystemId, createFileSystemObjectData)
  }

  private async deleteFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as IUser;
    const { fileSystemId, fileSystemObjectId } = await FileSystemIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.deleteFileSystemObject(user, fileSystemId, fileSystemObjectId);
  }

  private async getFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<AnyFileSystemObjectData> {
    const user = request.user as IUser;
    const { fileSystemId, fileSystemObjectId } = await FileSystemIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.getFileSystemObject(user, fileSystemId, fileSystemObjectId);
  }

  private async getFileSystemObjects(request: FastifyRequest, reply: FastifyReply): Promise<AnyFileSystemObjectData[]> {
    const user = request.user as IUser;
    const { fileSystemId } = await FileSystemIdSchema.parseAsync(request.params);
    const getFileSystemObjectsData = await GetFileSystemObjectsSchema.parseAsync(request.query);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.getFileSystemObjects(user, fileSystemId, getFileSystemObjectsData);
  }

}

export default FileSystemRouter;