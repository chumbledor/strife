import di from '@/DependencyInjection';
import BaseService from '@/services/BaseService';
import { AuthenticationServiceServiceId, type IAuthenticationService } from '@interfaces/services/IAuthenticationService';
import { AccountSchema, type AccountData, type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
class AuthenticationService extends BaseService implements IAuthenticationService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/authentication`;
  }

  public async login(data: LoginAuthenticationData): Promise<AccountData> {
    if (this.user.account)
      return Promise.reject();
    
    const accountData = await this.post<AccountData>({ schema: AccountSchema, data });
    this.user.login(accountData);
    return accountData;
  }

  public async logout(): Promise<void> {
    if (!this.user.account)
      return Promise.reject();

    try {
      await this.delete({ url: `/${this.user.account.id}` });
    } finally {
      this.user.logout();
    }
  }

  public async refresh(): Promise<AccountData> {
    if (!this.user.account)
      return Promise.reject();

    const accountData = await this.post<AccountData>({ schema: AccountSchema, url: '/refresh', init: { credentials: 'include' } });
    this.user.login(accountData);
    return accountData;
  }

  public async updateAuthentication(data: UpdateAuthenticationData): Promise<AccountData> {
    if (!this.user.account)
      return Promise.reject();

    return this.put<AccountData>({ schema: AccountSchema, url: `/${this.user.account.id}`, data });
  }

}

di.bind(AuthenticationServiceServiceId).to(AuthenticationService).inSingletonScope();