import BaseService from '@/services/BaseService';
import { Account } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class AccountService extends BaseService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/accounts`;
  }

  public createAccount(createData: Account.CreateData): Promise<Account.Data> {
    return this.post({ schema: Account.Schema, data: createData });
  }

  public deleteAccount(): Promise<void> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.delete({ url: `/${this.user.accountData.id}` });
  }

  public getAccount(accountId: string): Promise<Account.Data> {
    return this.get({ schema: Account.Schema, url: `/${accountId}` });
  }

  public getAccounts(getData: Account.GetData): Promise<Account.Data[]> {
    return this.get({ schema: Account.Schema.array(), data: getData });
  }

  public updateAccount(updateData: Account.UpdateData): Promise<Account.Data> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.put({ schema: Account.Schema, url: `/${this.user.accountData.id}`, data: updateData });
  }

}

export default AccountService;