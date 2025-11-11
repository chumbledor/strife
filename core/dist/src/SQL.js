var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from './DependencyInjection.js';
import AccountEntity from './entities/Account.entity.js';
import AuthenticationEntity from './entities/Authentication.entity.js';
import ProjectEntity from './entities/Project.entity.js';
import FileSystemDirectoryModel from './models/FileSystemDirectoryModel.js';
import FileSystemFileModel from './models/FileSystemFileModel.js';
import FileSystemObjectModel from './models/FileSystemObjectModel.js';
import { AppServiceId } from '../interfaces/IApp.js';
import { SQLServiceId } from '../interfaces/ISQL.js';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import config from '../mikro-orm.config.js';
import { injectable } from 'inversify';
import mongoose from 'mongoose';
class Models {
    _fileSystemObject;
    get fileSystemObject() {
        return this._fileSystemObject;
    }
    _fileSystemDirectory;
    get fileSystemDirectory() {
        return this._fileSystemDirectory;
    }
    _fileSystemFile;
    get fileSystemFile() {
        return this._fileSystemFile;
    }
    constructor(odm) {
        this._fileSystemObject = FileSystemObjectModel;
        this._fileSystemDirectory = FileSystemDirectoryModel;
        this._fileSystemFile = FileSystemFileModel;
    }
}
let SQL = class SQL {
    _orm;
    get orm() {
        return this._orm;
    }
    _account;
    get account() {
        return this._account;
    }
    _authentication;
    get authentication() {
        return this._authentication;
    }
    _project;
    get project() {
        return this._project;
    }
    _odm;
    get odm() {
        return this._odm;
    }
    _models;
    get models() {
        return this._models;
    }
    _app;
    async initialize() {
        this._orm = await MikroORM.init(config);
        this._account = this._orm.em.getRepository(AccountEntity),
            this._authentication = this._orm.em.getRepository(AuthenticationEntity),
            this._project = this._orm.em.getRepository(ProjectEntity);
        this._app = await di.getAsync(AppServiceId);
        this._app.instance.addHook('onRequest', this.databaseContextHook.bind(this));
        this._app.instance.addHook('onClose', this.closeDatabaseConnectionHook.bind(this));
        this._odm = await mongoose.connect(`mongodb://${process.env.NOSQL_HOST}:${process.env.NOSQL_PORT}`, {
            dbName: process.env.NOSQL_DATABASE,
            authSource: process.env.NOSQL_AUTH_SOURCE,
            user: process.env.NOSQL_USER,
            pass: process.env.NOSQL_PASSWORD
        });
        this._models = new Models(this._odm);
    }
    async update() {
        const schemaGenerator = this.orm.getSchemaGenerator();
        await schemaGenerator.updateSchema();
    }
    databaseContextHook(request, reply, done) {
        RequestContext.create(this._orm.em, done);
    }
    async closeDatabaseConnectionHook() {
        await this._orm.close();
    }
};
SQL = __decorate([
    injectable()
], SQL);
di.bind(SQLServiceId).to(SQL).inSingletonScope();
