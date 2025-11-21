import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { type IBaseEntity } from '@interfaces/entities/IBase.entity.js';
import { type IUniqueEntity } from '@interfaces/entities/IUnique.entity.js';
import { type IFileSystemEntity } from '@interfaces/entities/IFileSystem.entity.js';

export interface IProjectEntity extends IBaseEntity, IUniqueEntity {
  account: IAccountEntity;
  fileSystem: IFileSystemEntity;
  name: string;
  description?: string;
}