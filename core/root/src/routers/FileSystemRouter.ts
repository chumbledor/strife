import di from '@/DependencyInjection.js';
import { FileSystemControllerServiceId } from '@/di/controllers/FileSystemControllerInjector.js';
import BaseRouter from '@/routers/BaseRouter.js';
import User from '@/User.js';
import { FileSystem } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export class FileSystemRouter extends BaseRouter {

  protected override get prefix(): string | undefined {
    return 'filesystems';
  }

  public override async routes(instance: FastifyInstance): Promise<void> {
    super.routes(instance);
    instance.post('/:fileSystemId/objects', { onRequest: [ instance.authenticate ] }, this.createFileSystemObject.bind(this));
    instance.delete('/:fileSystemId/objects/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.deleteFileSystemObject.bind(this));
    instance.get('/:fileSystemId/objects/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.getFileSystemObject.bind(this));
    instance.get('/:fileSystemId/objects', { onRequest: [ instance.authenticate ] }, this.getFileSystemObjects.bind(this));
  }

  private async createFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<FileSystem.AnyObjectData> {
    const user = request.user as User;
    const { fileSystemId } = await FileSystem.IdSchema.parseAsync(request.params);
    const createObjectData = await FileSystem.CreateObjectSchema.parseAsync(request.body);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.createFileSystemObject(user, fileSystemId, createObjectData)
  }

  private async deleteFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as User;
    const { fileSystemId, fileSystemObjectId } = await FileSystem.IdSchema.and(FileSystem.ObjectIdSchema).parseAsync(request.params);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.deleteFileSystemObject(user, fileSystemId, fileSystemObjectId);
  }

  private async getFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<FileSystem.AnyObjectData> {
    const user = request.user as User;
    const { fileSystemId, fileSystemObjectId } = await FileSystem.IdSchema.and(FileSystem.ObjectIdSchema).parseAsync(request.params);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.getFileSystemObject(user, fileSystemId, fileSystemObjectId);
  }

  private async getFileSystemObjects(request: FastifyRequest, reply: FastifyReply): Promise<FileSystem.AnyObjectData[]> {
    const user = request.user as User;
    const { fileSystemId } = await FileSystem.IdSchema.parseAsync(request.params);
    const getObjectsData = await FileSystem.GetObjectsSchema.parseAsync(request.query);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.getFileSystemObjects(user, fileSystemId, getObjectsData);
  }

}

export default FileSystemRouter;