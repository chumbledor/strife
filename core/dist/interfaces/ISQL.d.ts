import { type IAccountRepository } from './repositories/IAccountRepository.js';
import { type IAuthenticationRepository } from './repositories/IAuthenticationRepository.js';
import { type IProjectRepository } from './repositories/IProjectRepository.js';
import { MikroORM } from '@mikro-orm/core';
import { type ServiceIdentifier } from 'inversify';
export interface ISQL {
    readonly orm: MikroORM;
    readonly account: IAccountRepository;
    readonly authentication: IAuthenticationRepository;
    readonly project: IProjectRepository;
    initialize(): Promise<void>;
    update(): Promise<void>;
}
export declare const SQLServiceId: ServiceIdentifier<ISQL>;
