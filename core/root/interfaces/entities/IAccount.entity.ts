import { type IAuthenticationEntity } from '@interfaces/entities/IAuthentication.entity.js';
import { type IBaseEntity } from '@interfaces/entities/IBase.entity.js';
import { type IProjectEntity } from '@interfaces/entities/IProject.entity.js';
import { type IUniqueEntity } from '@interfaces/entities/IUnique.entity.js';
import { type Collection } from '@mikro-orm/core';

export interface IAccountEntity extends IBaseEntity, IUniqueEntity {
  authentication: IAuthenticationEntity;
  projects: Collection<IProjectEntity>;
  email: string;
  username: string;
}