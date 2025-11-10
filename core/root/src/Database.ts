import di from '@/DependencyInjection.js';
import AccountEntity from '@/entities/Account.entity.js';
import AuthenticationEntity from '@/entities/Authentication.entity.js';
import ProjectEntity from '@/entities/Project.entity.js';
import AccountRepository from '@/repositories/AccountRepository.js';
import AuthenticationRepository from '@/repositories/AuthenticationRepository.js';
import ProjectRepository from '@/repositories/ProjectRepository.js';
import { AppServiceId, type IApp } from '@interfaces/IApp.js';
import { DatabaseServiceId, type IDatabase } from '@interfaces/IDatabase.js';
import { type IAccountRepository } from '@interfaces/repositories/IAccountRepository.js';
import { type IAuthenticationRepository } from '@interfaces/repositories/IAuthenticationRepository.js';
import { type IProjectRepository } from '@interfaces/repositories/IProjectRepository.js';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import config from '@root/mikro-orm.config.js';
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { injectable } from 'inversify';

@injectable()
class Database implements IDatabase {

  private _orm!: MikroORM;
  public get orm(): MikroORM {
    return this._orm;
  }

  private _account!: IAccountRepository;
  public get account(): IAccountRepository {
    return this._account;
  }

  private _authentication!: IAuthenticationRepository;
  public get authentication(): IAuthenticationRepository {
    return this._authentication;
  }

  private _project!: IProjectRepository;
  public get project(): IProjectRepository {
    return this._project;
  }

  private _app!: IApp;
  
  public async initialize(): Promise<void> {
    this._orm = await MikroORM.init(config);
    this._account = this._orm.em.getRepository(AccountEntity) as AccountRepository as IAccountRepository;
    this._authentication = this._orm.em.getRepository(AuthenticationEntity) as AuthenticationRepository as IAuthenticationRepository;
    this._project = this._orm.em.getRepository(ProjectEntity) as ProjectRepository as IProjectRepository;
    this._app = await di.getAsync(AppServiceId);

    this._app.instance.addHook(
      'onRequest',
      this.databaseContextHook.bind(this)
    );
    
    this._app.instance.addHook(
      'onClose', 
      this.closeDatabaseConnectionHook.bind(this)
    );
  }

  public async update(): Promise<void> {
    const schemaGenerator = this.orm.getSchemaGenerator();
    await schemaGenerator.updateSchema();
  }

  private databaseContextHook(request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction): void {
    RequestContext.create(this._orm.em, done);
  }

  private async closeDatabaseConnectionHook(): Promise<void> {
    await this._orm.close();
  }

}

di.bind(DatabaseServiceId).to(Database).inSingletonScope();