import { type IAccountEntity } from '../entities/IAccount.entity.js';
import { type IBaseEntity } from '../entities/IBase.entity.js';
import { type IUniqueEntity } from '../entities/IUnique.entity.js';
import { type IFileSystemDirectory } from '../models/IFileSystemDirectoryModel.js';
import { type EventArgs } from '@mikro-orm/core';
export interface IProjectEntity extends IBaseEntity, IUniqueEntity {
    account: IAccountEntity;
    name: string;
    description?: string;
    fileSystemRootObjectId: string;
    getFileSystemRootDirectory(): Promise<IFileSystemDirectory | null>;
    createFileSystem(args: EventArgs<IProjectEntity>): Promise<void>;
    deleteFileSystem(args: EventArgs<IProjectEntity>): Promise<void>;
}
