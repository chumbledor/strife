import { type IBaseEntity } from '@interfaces/entities/IBase.entity.js';
import { type IUniqueEntity } from '@interfaces/entities/IUnique.entity.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IFileSystemDirectory } from '@interfaces/models/IFileSystemDirectoryModel.js';
import { type EventArgs } from '@mikro-orm/core';

export interface IFileSystemEntity extends IBaseEntity, IUniqueEntity {
  rootFileSystemObjectId: string;
  hasPermission(user: IUser): Promise<boolean>;
  getRootFileSystemObject(): Promise<IFileSystemDirectory | undefined>
  createFileSystem(args: EventArgs<IFileSystemEntity>): Promise<void>;
  deleteFileSystem(args: EventArgs<IFileSystemEntity>): Promise<void>;
}