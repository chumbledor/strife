import di from '@/DependencyInjection.js';
import { FileSystemControllerServiceId } from '@/di/controllers/FileSystemControllerInjector.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IFileSystemRouter } from '@interfaces/routers/IFileSystemRouter.js';
import { CreateFileSystemDirectorySchema, CreateFileSystemFileSchema, CreateFileSystemObjectSchema, FileSystemObjectIdSchema, FileSystemObjectType, ProjectIdSchema, type FileSystemDirectoryData, type FileSystemFileData } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export default class FileSystemRouter extends BaseRouter implements IFileSystemRouter {

  protected override get prefix(): string | undefined {
    return 'projects/:projectId/fs';
  }

  public override async routes(instance: FastifyInstance): Promise<void> {
    super.routes(instance);
    instance.post('/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.createFileSystemObject.bind(this));
    instance.delete('/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.deleteFileSystemObject.bind(this));
    instance.get('/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.getFileSystemObject.bind(this));
  }

  private async createFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<FileSystemDirectoryData | FileSystemFileData> {
    const user = request.user as IUser;
    const { projectId, fileSystemObjectId } = await ProjectIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
    let data = await CreateFileSystemObjectSchema.parseAsync(request.body);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
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

  private async deleteFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as IUser;
    const { projectId, fileSystemObjectId } = await ProjectIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    return fileSystemController.deleteFileSystemObject(user, projectId, fileSystemObjectId);
  }

  private async getFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<FileSystemDirectoryData | FileSystemFileData> {
    const user = request.user as IUser;
    const { projectId, fileSystemObjectId } = await ProjectIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
    const fileSystemController = await di.getAsync(FileSystemControllerServiceId)
    const data = fileSystemController.getFileSystemObject(user, projectId, fileSystemObjectId);
    return data;
  }

  // private async createFileSystemDirectory(account: IAccountEntity, projectId: string, fileSystemObjectId: string, data: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData> {
  //   const nosql = await di.getAsync(NoSQLServiceId);
  //   const fileSystemDirectory = new nosql.fileSystemDirectory({
  //     projectId,
  //     parentId: fileSystemObjectId,
  //     name: data.name
  //   });

  //   fileSystemDirectory.save();
  //   const fileSystemDirectoryData = await FileSystemDirectorySchema.parseAsync(fileSystemDirectory);
  //   return fileSystemDirectoryData;
  // }

  // private async createFileSystemFile(account: IAccountEntity, projectId: string, fileSystemObjectId: string, data: CreateFileSystemFileData): Promise<FileSystemFileData> {
  //   const nosql = await di.getAsync(NoSQLServiceId);
  //   const fileSystemFile = new nosql.fileSystemFile({
  //     projectId,
  //     parentId: fileSystemObjectId,
  //     name: data.name,
  //     size: data.size,
  //     mimeType: data.mimeType
  //   });

  //   fileSystemFile.save();
  //   const fileSystemFileData = await FileSystemFileSchema.parseAsync(fileSystemFile);
  //   return fileSystemFileData;
  // }

  // private async deleteFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  //   const user = request.user as IUser;
  //   const { projectId, fileSystemObjectId } = await ProjectIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
  //   let data = await DeleteFileSystemObjectSchema.parseAsync(request.body);
  // }

}