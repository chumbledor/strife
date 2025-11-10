import di from '@/DependencyInjection';
import BaseService from '@/services/BaseService';
import { UserServiceId } from '@interfaces/IUser';
import { AccountServiceServiceId, type IAccountService } from '@interfaces/services/IAccountService';
import { AccountSchema, type AccountData, type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
class AccountService extends BaseService implements IAccountService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/accounts`;
  }

  public async createAccount(data: CreateAccountData): Promise<AccountData> {
    return await this.post<AccountData>({ schema: AccountSchema, data });
  }

  public async deleteAccount(): Promise<void> {
    if (!this.user.account)
      return Promise.reject();

    return this.delete({ url: `/${this.user.account.id}` });
  }

  public getAccount(id: string): Promise<AccountData> {
    return this.get<AccountData>({ schema: AccountSchema, url: `/${id}` });
  }

  public getAccounts(data: GetAccountsData): Promise<AccountData[]> {
    return this.get<AccountData[]>({ schema: AccountSchema.array(), data });
  }

  public async updateAccount(data: UpdateAccountData): Promise<AccountData> {
    if (!this.user.account)
      return Promise.reject();

    return this.put<AccountData>({ schema: AccountSchema, url: `/${this.user.account.id}`, data });
  }

}

di.bind(AccountServiceServiceId).to(AccountService).inSingletonScope();