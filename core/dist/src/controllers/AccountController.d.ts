import BaseController from '../controllers/BaseController.js';
import { type IAccountController } from '../../interfaces/controllers/IAccountController.js';
import { type IAccountEntity } from '../../interfaces/entities/IAccount.entity.js';
import { type QBFilterQuery } from '@mikro-orm/core';
import { type IUser } from '../../interfaces/IUser.js';
import { type AccountData, type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';
export default class AccountController extends BaseController implements IAccountController {
    existsAccount(where: QBFilterQuery<IAccountEntity>): Promise<boolean>;
    createAccount(createAccountData: CreateAccountData): Promise<AccountData>;
    deleteAccount(user: IUser): Promise<void>;
    getAccount(accountId: string): Promise<AccountData>;
    getAccounts(getAccountsData: GetAccountsData): Promise<AccountData[]>;
    updateAccount(user: IUser, updateAccountData: UpdateAccountData): Promise<AccountData>;
}
