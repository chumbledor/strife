import BaseService from '@/services/BaseService';
import { Account, Authentication } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class AuthenticationService extends BaseService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/authentication`;
  }

  public async login(loginData: Authentication.LoginData): Promise<Account.Data> {
    if (this.user.accountData)
      return Promise.reject();
    
    const accountData = await this.post({ schema: Account.Schema, data: loginData });
    this.user.login(accountData);
    return accountData;
  }

  public async logout(): Promise<void> {
    if (!this.user.accountData)
      return Promise.reject();

    try {
      await this.delete({ url: `/${this.user.accountData.id}` });
    } finally {
      this.user.logout();
    }
  }

  public async refresh(): Promise<Account.Data> {
    if (!this.user.accountData)
      return Promise.reject();

    const accountData = await this.post({ schema: Account.Schema, url: '/refresh', init: { credentials: 'include' } });
    this.user.login(accountData);
    return accountData;
  }

  public async updateAuthentication(updateData: Authentication.UpdateData): Promise<Account.Data> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.put({ schema: Account.Schema, url: `/${this.user.accountData.id}`, data: updateData });
  }

}

export default AuthenticationService;