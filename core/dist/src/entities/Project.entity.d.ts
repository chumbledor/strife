import AccountEntity from '../entities/Account.entity.js';
import UniqueEntity from '../entities/Unique.entity.js';
import { IProjectEntity } from '../../interfaces/entities/IProject.entity.js';
import { type IFileSystemDirectory } from '../../interfaces/models/IFileSystemDirectoryModel.js';
import { type EventArgs } from '@mikro-orm/core';
export default class ProjectEntity extends UniqueEntity implements IProjectEntity {
    account: AccountEntity;
    name: string;
    description?: string;
    fileSystemRootDirectoryId: string;
    getFileSystemRootDirectory(): Promise<IFileSystemDirectory | null>;
    createFileSystem(args: EventArgs<IProjectEntity>): Promise<void>;
    deleteFileSystem(args: EventArgs<IProjectEntity>): Promise<void>;
}
