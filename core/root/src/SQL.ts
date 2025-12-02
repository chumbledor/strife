import App from '@/App.js';
import di from '@/DependencyInjection.js';
import { AppServiceId } from '@/di/AppInjector.js';
import AccountEntity from '@/entities/Account.entity.js';
import AuthenticationEntity from '@/entities/Authentication.entity.js';
import FileSystemEntity from '@/entities/FileSystem.entity.js';
import ProjectEntity from '@/entities/Project.entity.js';
import config from '@config/mikro-orm.config.js';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import { SqlEntityRepository } from '@mikro-orm/mysql';
import { type FastifyReply, type FastifyRequest, type HookHandlerDoneFunction } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export class SQL {

  private _orm!: MikroORM;
  public get orm(): MikroORM {
    return this._orm;
  }

  private _account!: SqlEntityRepository<AccountEntity>;
  public get account(): SqlEntityRepository<AccountEntity> {
    return this._account;
  }

  private _authentication!: SqlEntityRepository<AuthenticationEntity>;
  public get authentication(): SqlEntityRepository<AuthenticationEntity> {
    return this._authentication;
  }

  private _project!: SqlEntityRepository<ProjectEntity>;
  public get project(): SqlEntityRepository<ProjectEntity> {
    return this._project;
  }

  private _fileSystem!: SqlEntityRepository<FileSystemEntity>;
  public get fileSystem(): SqlEntityRepository<FileSystemEntity> {
    return this._fileSystem;
  }

  private _app!: App;
  
  public async initialize(): Promise<void> {
    this._orm = await MikroORM.init(config);
    this._account = this._orm.em.getRepository(AccountEntity),
    this._authentication = this._orm.em.getRepository(AuthenticationEntity),
    this._project = this._orm.em.getRepository(ProjectEntity)
    this._fileSystem = this._orm.em.getRepository(FileSystemEntity);

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

export default SQL;