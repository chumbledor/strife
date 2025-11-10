import { type IAuthenticationEntity } from '../entities/IAuthentication.entity.js';
import { type IBaseEntity } from '../entities/IBase.entity.js';
import { type IProjectEntity } from '../entities/IProject.entity.js';
import { type IUniqueEntity } from '../entities/IUnique.entity.js';
import { Collection } from '@mikro-orm/core';
export interface IAccountEntity extends IBaseEntity, IUniqueEntity {
    authentication: IAuthenticationEntity;
    projects: Collection<IProjectEntity>;
    email: string;
    username: string;
}
