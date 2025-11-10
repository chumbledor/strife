import AuthenticationEntity from '../entities/Authentication.entity.js';
import ProjectEntity from '../entities/Project.entity.js';
import UniqueEntity from '../entities/Unique.entity.js';
import { IAccountEntity } from '../../interfaces/entities/IAccount.entity.js';
import { Collection } from '@mikro-orm/core';
export default class AccountEntity extends UniqueEntity implements IAccountEntity {
    authentication: AuthenticationEntity;
    projects: Collection<ProjectEntity, object>;
    email: string;
    username: string;
}
