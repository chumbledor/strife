import { type IBaseService } from '@interfaces/services/IBaseService';
import { type AccountData, type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';

export interface IAccountService extends IBaseService {
  createAccount(createAccountData: CreateAccountData): Promise<AccountData>;
  deleteAccount(): Promise<void>;
  getAccount(accountId: string): Promise<AccountData>;
  getAccounts(getAccountsData: GetAccountsData): Promise<AccountData[]>;
  updateAccount(updateAccountData: UpdateAccountData): Promise<AccountData>;
}