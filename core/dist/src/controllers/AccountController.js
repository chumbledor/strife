var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseController from '../controllers/BaseController.js';
import AccountEntity from '../entities/Account.entity.js';
import AuthenticationEntity from '../entities/Authentication.entity.js';
import { AccountCreateEmailInUseError, AccountCreateUsernameInUseError } from '../errors/account.js';
import { AccountSchema } from '@strife/common';
import { injectable } from 'inversify';
let AccountController = class AccountController extends BaseController {
    async existsAccount(where) {
        const count = await this.sql.account.qb()
            .where(where)
            .getCount();
        return count > 0;
    }
    async createAccount(createAccountData) {
        const isEmailInUse = await this.existsAccount({ email: createAccountData.email });
        if (isEmailInUse)
            return Promise.reject(AccountCreateEmailInUseError);
        const isUsernameInUse = await this.existsAccount({ username: createAccountData.username });
        if (isUsernameInUse)
            return Promise.reject(AccountCreateUsernameInUseError);
        const accountEntity = new AccountEntity();
        const authenticationEntity = new AuthenticationEntity();
        accountEntity.authentication = authenticationEntity;
        accountEntity.email = createAccountData.email;
        accountEntity.username = createAccountData.username;
        authenticationEntity.account = accountEntity;
        authenticationEntity.password = createAccountData.password;
        await this.sql.account.getEntityManager().persistAndFlush(accountEntity);
        return AccountSchema.parseAsync(accountEntity);
    }
    async deleteAccount(user) {
        const accountEntity = user.account;
        return this.sql.account.getEntityManager().removeAndFlush(accountEntity);
    }
    async getAccount(accountId) {
        const accountEntity = await this.sql.account.findOneOrFail({ id: accountId });
        return AccountSchema.parseAsync(accountEntity);
    }
    async getAccounts(getAccountsData) {
        const where = {};
        if (getAccountsData.ids && getAccountsData.ids.length > 0)
            where.id = { $in: getAccountsData.ids };
        if (getAccountsData.username)
            where.username = { $like: `%${getAccountsData.username}` };
        const accountEntities = await this.sql.account.find(where, {
            offset: getAccountsData.skip,
            limit: getAccountsData.take, orderBy: { id: 'ASC' }
        });
        return await AccountSchema.array().parseAsync(accountEntities);
    }
    async updateAccount(user, updateAccountData) {
        const accountEntity = user.account;
        Object.assign(accountEntity, updateAccountData);
        await this.sql.account.getEntityManager().flush();
        return await AccountSchema.parseAsync(accountEntity);
    }
};
AccountController = __decorate([
    injectable()
], AccountController);
export default AccountController;
