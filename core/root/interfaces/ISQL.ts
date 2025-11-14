import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { type IAuthenticationEntity } from '@interfaces/entities/IAuthentication.entity.js';
import { type IProjectEntity } from '@interfaces/entities/IProject.entity.js';
import { MikroORM } from '@mikro-orm/core';
import { SqlEntityRepository } from '@mikro-orm/mysql';

export interface ISQL {
  readonly orm: MikroORM;
  readonly account: SqlEntityRepository<IAccountEntity>,
  readonly authentication: SqlEntityRepository<IAuthenticationEntity>,
  readonly project: SqlEntityRepository<IProjectEntity>
  initialize(): Promise<void>;
  update(): Promise<void>;
}