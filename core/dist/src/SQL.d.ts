import { type IAccountEntity } from '../interfaces/entities/IAccount.entity.js';
import { type IAuthenticationEntity } from '../interfaces/entities/IAuthentication.entity.js';
import { type IProjectEntity } from '../interfaces/entities/IProject.entity.js';
import { type ISQL } from '../interfaces/ISQL.js';
import { MikroORM } from '@mikro-orm/core';
import { SqlEntityRepository } from '@mikro-orm/mysql';
export default class SQL implements ISQL {
    private _orm;
    get orm(): MikroORM;
    private _account;
    get account(): SqlEntityRepository<IAccountEntity>;
    private _authentication;
    get authentication(): SqlEntityRepository<IAuthenticationEntity>;
    private _project;
    get project(): SqlEntityRepository<IProjectEntity>;
    private _app;
    initialize(): Promise<void>;
    update(): Promise<void>;
    private databaseContextHook;
    private closeDatabaseConnectionHook;
}
