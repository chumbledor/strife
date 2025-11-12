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
import { AppServiceId } from '../interfaces/IApp.js';
import { SQLServiceId } from '../interfaces/ISQL.js';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import config from '../config/mikro-orm.config.js';
import { injectable } from 'inversify';
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
    _app;
    async initialize() {
        this._orm = await MikroORM.init(config);
        this._account = this._orm.em.getRepository(AccountEntity),
            this._authentication = this._orm.em.getRepository(AuthenticationEntity),
            this._project = this._orm.em.getRepository(ProjectEntity);
        this._app = await di.getAsync(AppServiceId);
        this._app.instance.addHook('onRequest', this.databaseContextHook.bind(this));
        this._app.instance.addHook('onClose', this.closeDatabaseConnectionHook.bind(this));
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
