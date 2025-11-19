import Batcher from '@/collections/Batcher';
import BaseService from '@/services/BaseService';
import { type IAccountService } from '@interfaces/services/IAccountService';
import { AccountSchema, GetAccountsSchema, type AccountData, type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export default class AccountService extends BaseService implements IAccountService {

  private _batcher = new Batcher<string, AccountData>(this.onFetch);

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/accounts`;
  }

  public createAccount(createAccountData: CreateAccountData): Promise<AccountData> {
    return this.post<AccountData>({ schema: AccountSchema, data: createAccountData });
  }

  public deleteAccount(): Promise<void> {
    if (!this.user.account)
      return Promise.reject();

    return this.delete({ url: `/${this.user.account.id}` });
  }

  public getAccount(accountId: string): Promise<AccountData> {
    return this._batcher.request(accountId);
    // return this.get<AccountData>({ schema: AccountSchema, url: `/${accountId}` });
  }

  public getAccounts(getAccountsData: GetAccountsData): Promise<AccountData[]> {
    return this.get<AccountData[]>({ schema: AccountSchema.array(), data: getAccountsData });
  }

  public async updateAccount(updateAccountData: UpdateAccountData): Promise<AccountData> {
    if (!this.user.account)
      return Promise.reject();

    return this.put<AccountData>({ schema: AccountSchema, url: `/${this.user.account.id}`, data: updateAccountData });
  }

  private async onFetch(ids: string[]): Promise<Map<string, AccountData>> {
    const getAccountsData = await GetAccountsSchema.parseAsync({ ids });
    const accountsData = await this.getAccounts(getAccountsData);
    const accountsEntries = accountsData.map((accountData: AccountData): [string, AccountData] => [ accountData.id, accountData ]);
    return new Map(accountsEntries);
  }

}