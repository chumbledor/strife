var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import { AccountDeleteUnauthorizedError, AccountUpdateUnauthorizedError } from '../errors/account.js';
import BaseRouter from '../routers/BaseRouter.js';
import { SQLServiceId } from '../../interfaces/ISQL.js';
import { AccountRouterServiceId } from '../../interfaces/routers/IAccountRouter.js';
import { AccountSchema, CreateAccountSchema, GetAccountsSchema, IdSchema, UpdateAccountSchema } from '@strife/common';
import { injectable } from 'inversify';
let AccountRouter = class AccountRouter extends BaseRouter {
    get prefix() {
        return 'accounts';
    }
    async routes(instance) {
        super.routes(instance);
        instance.post('/', this.createAccount.bind(this));
        instance.delete('/:id', { onRequest: [instance.authenticate] }, this.deleteAccount.bind(this));
        instance.get('/:id', this.getAccount.bind(this));
        instance.get('/', this.getAccounts.bind(this));
        instance.put('/:id', { onRequest: [instance.authenticate] }, this.updateAccount.bind(this));
    }
    async createAccount(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const data = await CreateAccountSchema.parseAsync(request.body);
        const account = await sql.account.createAccount(data);
        const accountData = await AccountSchema.parseAsync(account);
        return accountData;
    }
    async deleteAccount(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const user = request.user;
        const { id } = await IdSchema.parseAsync(request.params);
        if (!user.is(id))
            return Promise.reject(AccountDeleteUnauthorizedError);
        return await sql.account.deleteAccount(user.account);
    }
    async getAccount(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const { id } = await IdSchema.parseAsync(request.params);
        const account = await sql.account.getAccount(id);
        const accountData = await AccountSchema.parseAsync(account);
        return accountData;
    }
    async getAccounts(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const data = await GetAccountsSchema.parseAsync(request.query);
        const accountEntities = await sql.account.getAccounts(data);
        const accountDatas = await AccountSchema.array().parseAsync(accountEntities);
        return accountDatas;
    }
    async updateAccount(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const user = request.user;
        const { id } = await IdSchema.parseAsync(request.params);
        if (!user.is(id))
            return Promise.reject(AccountUpdateUnauthorizedError);
        const data = await UpdateAccountSchema.parseAsync(request.body);
        const account = await sql.account.updateAccount(user.account, data);
        const accountData = await AccountSchema.parseAsync(account);
        return accountData;
    }
};
AccountRouter = __decorate([
    injectable()
], AccountRouter);
di.bind(AccountRouterServiceId).to(AccountRouter).inSingletonScope();
