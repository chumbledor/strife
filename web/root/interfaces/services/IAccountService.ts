import { type IBaseService } from '@interfaces/services/IBaseService';
import { type AccountData, type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';
import { type ServiceIdentifier } from 'inversify';

export interface IAccountService extends IBaseService {
  createAccount(data: CreateAccountData): Promise<AccountData>;
  deleteAccount(): Promise<void>;
  getAccount(id: string): Promise<AccountData>;
  getAccounts(data: GetAccountsData): Promise<AccountData[]>;
  updateAccount(data: UpdateAccountData): Promise<AccountData>;
}

export const AccountServiceServiceId: ServiceIdentifier<IAccountService> = Symbol.for('AccountServiceServiceId');