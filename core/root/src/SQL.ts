import di from '@/DependencyInjection.js';
import AccountEntity from '@/entities/Account.entity.js';
import AuthenticationEntity from '@/entities/Authentication.entity.js';
import ProjectEntity from '@/entities/Project.entity.js';
import FileSystemDirectoryModel from '@/models/FileSystemDirectoryModel.js';
import FileSystemFileModel from '@/models/FileSystemFileModel.js';
import FileSystemObjectModel from '@/models/FileSystemObjectModel.js';
import AccountRepository from '@/repositories/AccountRepository.js';
import AuthenticationRepository from '@/repositories/AuthenticationRepository.js';
import ProjectRepository from '@/repositories/ProjectRepository.js';
import { AppServiceId, type IApp } from '@interfaces/IApp.js';
import { SQLServiceId, type ISQL } from '@root/interfaces/ISQL.js';
import { type IAccountRepository } from '@interfaces/repositories/IAccountRepository.js';
import { type IAuthenticationRepository } from '@interfaces/repositories/IAuthenticationRepository.js';
import { type IProjectRepository } from '@interfaces/repositories/IProjectRepository.js';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import config from '@root/mikro-orm.config.js';
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { injectable } from 'inversify';
import mongoose from 'mongoose';

class Models {
  private _fileSystemObject: typeof FileSystemObjectModel;
  public get fileSystemObject(): typeof FileSystemObjectModel {
    return this._fileSystemObject;
  }

  private _fileSystemDirectory: typeof FileSystemDirectoryModel;
  public get fileSystemDirectory(): typeof FileSystemDirectoryModel {
    return this._fileSystemDirectory;
  }

  private _fileSystemFile: typeof FileSystemFileModel;
  public get fileSystemFile(): typeof FileSystemFileModel {
    return this._fileSystemFile;
  }

  public constructor(odm: typeof mongoose) {
    this._fileSystemObject = FileSystemObjectModel;
    this._fileSystemDirectory = FileSystemDirectoryModel;
    this._fileSystemFile = FileSystemFileModel;
  }
}

@injectable()
class SQL implements ISQL {

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

  private _odm!: typeof mongoose;
  public get odm(): typeof mongoose {
    return this._odm;
  }

  private _models!: Models;
  public get models(): Models {
    return this._models;
  }

  private _app!: IApp;
  
  public async initialize(): Promise<void> {
    this._orm = await MikroORM.init(config);
    this._account = this._orm.em.getRepository(AccountEntity) as AccountRepository as IAccountRepository,
    this._authentication = this._orm.em.getRepository(AuthenticationEntity) as AuthenticationRepository as IAuthenticationRepository,
    this._project = this._orm.em.getRepository(ProjectEntity) as ProjectRepository as IProjectRepository

    this._app = await di.getAsync(AppServiceId);

    this._app.instance.addHook(
      'onRequest',
      this.databaseContextHook.bind(this)
    );
    
    this._app.instance.addHook(
      'onClose', 
      this.closeDatabaseConnectionHook.bind(this)
    );

    this._odm = await mongoose.connect(
      `mongodb://${process.env.NOSQL_HOST}:${process.env.NOSQL_PORT}`,
      {
        dbName: process.env.NOSQL_DATABASE,
        authSource: process.env.NOSQL_AUTH_SOURCE,
        user: process.env.NOSQL_USER,
        pass: process.env.NOSQL_PASSWORD
      }
    );
    this._models = new Models(this._odm);
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

di.bind(SQLServiceId).to(SQL).inSingletonScope();