var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import { AccountControllerServiceId } from '../di/controllers/AccountControllerInjector.js';
import { AccountDeleteUnauthorizedError, AccountUpdateUnauthorizedError } from '../errors/account.js';
import BaseRouter from '../routers/BaseRouter.js';
import { AccountIdSchema, CreateAccountSchema, GetAccountsSchema, UpdateAccountSchema } from '@strife/common';
import { injectable } from 'inversify';
let AccountRouter = class AccountRouter extends BaseRouter {
    get prefix() {
        return 'accounts';
    }
    async routes(instance) {
        super.routes(instance);
        instance.post('/', this.createAccount.bind(this));
        instance.delete('/:accountId', { onRequest: [instance.authenticate] }, this.deleteAccount.bind(this));
        instance.get('/:accountId', this.getAccount.bind(this));
        instance.get('/', this.getAccounts.bind(this));
        instance.put('/:accountId', { onRequest: [instance.authenticate] }, this.updateAccount.bind(this));
    }
    async createAccount(request, reply) {
        const createAccountData = await CreateAccountSchema.parseAsync(request.body);
        const accountController = await di.getAsync(AccountControllerServiceId);
        return accountController.createAccount(createAccountData);
    }
    async deleteAccount(request, reply) {
        const user = request.user;
        const { accountId } = await AccountIdSchema.parseAsync(request.params);
        if (!user.is(accountId))
            return Promise.reject(AccountDeleteUnauthorizedError);
        const accountController = await di.getAsync(AccountControllerServiceId);
        return accountController.deleteAccount(user);
    }
    async getAccount(request, reply) {
        const { accountId } = await AccountIdSchema.parseAsync(request.params);
        const accountController = await di.getAsync(AccountControllerServiceId);
        return accountController.getAccount(accountId);
    }
    async getAccounts(request, reply) {
        const getAccountsData = await GetAccountsSchema.parseAsync(request.query);
        const accountController = await di.getAsync(AccountControllerServiceId);
        return accountController.getAccounts(getAccountsData);
    }
    async updateAccount(request, reply) {
        const user = request.user;
        const { accountId } = await AccountIdSchema.parseAsync(request.params);
        if (!user.is(accountId))
            return Promise.reject(AccountUpdateUnauthorizedError);
        const updateAccountData = await UpdateAccountSchema.parseAsync(request.body);
        const accountController = await di.getAsync(AccountControllerServiceId);
        return accountController.updateAccount(user, updateAccountData);
    }
};
AccountRouter = __decorate([
    injectable()
], AccountRouter);
export default AccountRouter;
