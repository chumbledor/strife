import { type IAccountRepository } from '@interfaces/repositories/IAccountRepository.js';
import { type IAuthenticationRepository } from '@interfaces/repositories/IAuthenticationRepository.js';
import { type IProjectRepository } from '@interfaces/repositories/IProjectRepository.js';
import { MikroORM } from '@mikro-orm/core';
import { type ServiceIdentifier } from 'inversify';

export interface IDatabase {
  orm: MikroORM;
  account: IAccountRepository;
  authentication: IAuthenticationRepository;
  project: IProjectRepository;
  initialize(): Promise<void>;
  update(): Promise<void>;
}

export const DatabaseServiceId: ServiceIdentifier<IDatabase> = Symbol.for('DatabaseServiceId');