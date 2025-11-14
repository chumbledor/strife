import { type IBaseController } from '@interfaces/controllers/IBaseController.js';
import { type IUser } from '@interfaces/IUser.js';
import { type QBFilterQuery } from '@mikro-orm/core';
import { type AccountData, type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';

export interface IAccountController extends IBaseController {
  existsAccount(where: QBFilterQuery<AccountData>): Promise<boolean>;
  createAccount(createAccountData: CreateAccountData): Promise<AccountData>;
  deleteAccount(user: IUser): Promise<void>;
  getAccount(accountId: string): Promise<AccountData>;
  getAccounts(getAccountsData: GetAccountsData): Promise<AccountData[]>;
  updateAccount(user: IUser, updateAccountData: UpdateAccountData): Promise<AccountData>;
}