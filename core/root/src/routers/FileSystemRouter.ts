import di from '@/DependencyInjection.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { NoSQLServiceId } from '@interfaces/INoSQL.js';
import { type IUser } from '@interfaces/IUser.js';
import { FileSystemRouterServiceId, type IFileSystemRouter } from '@interfaces/routers/IFileSystemRouter.js';
import { CreateFileSystemDirectorySchema, CreateFileSystemFileSchema, CreateFileSystemObjectSchema, FileSystemDirectorySchema, FileSystemFileSchema, FileSystemObjectIdSchema, FileSystemObjectType, ProjectIdSchema, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
class FileSystemRouter extends BaseRouter implements IFileSystemRouter {

  protected override get prefix(): string | undefined {
    return 'projects/:projectId/fs';
  }

  public override async routes(instance: FastifyInstance): Promise<void> {
    super.routes(instance);
    instance.post('/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.createFileSystemObject.bind(this));
    // instance.delete('/:fileSystemObjectId', { onRequest: [ instance.authenticate ] }, this.deleteFileSystemObject.bind(this));
  }

  private async createFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<FileSystemDirectoryData | FileSystemFileData> {
    const user = request.user as IUser;
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

  private async createFileSystemDirectory(account: IAccountEntity, projectId: string, fileSystemObjectId: string, data: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData> {
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

  private async createFileSystemFile(account: IAccountEntity, projectId: string, fileSystemObjectId: string, data: CreateFileSystemFileData): Promise<FileSystemFileData> {
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

  // private async deleteFileSystemObject(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  //   const user = request.user as IUser;
  //   const { projectId, fileSystemObjectId } = await ProjectIdSchema.and(FileSystemObjectIdSchema).parseAsync(request.params);
  //   let data = await DeleteFileSystemObjectSchema.parseAsync(request.body);
  // }

}

di.bind(FileSystemRouterServiceId).to(FileSystemRouter).inSingletonScope();