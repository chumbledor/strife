import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { type IBaseEntity } from '@interfaces/entities/IBase.entity.js';
import { type IUniqueEntity } from '@interfaces/entities/IUnique.entity.js';
import { type IFileSystemDirectory } from '@interfaces/models/IFileSystemDirectoryModel.js';
import { type EventArgs } from '@mikro-orm/core';

export interface IProjectEntity extends IBaseEntity, IUniqueEntity {
  account: IAccountEntity;
  name: string;
  description?: string;
  fileSystemRootDirectoryId: string;
  getFileSystemRootDirectory(): Promise<IFileSystemDirectory | null>
  createFileSystem(args: EventArgs<IProjectEntity>): Promise<void>;
  deleteFileSystem(args: EventArgs<IProjectEntity>): Promise<void>;
}