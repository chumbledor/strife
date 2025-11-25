import BaseService from '@/services/BaseService';
import { type IAuthenticationService } from '@interfaces/services/IAuthenticationService';
import { AccountSchema, type AccountData, type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class AuthenticationService extends BaseService implements IAuthenticationService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/authentication`;
  }

  public async login(loginAuthenticationData: LoginAuthenticationData): Promise<AccountData> {
    if (this.user.accountData)
      return Promise.reject();
    
    const accountData = await this.post<AccountData>({ schema: AccountSchema, data: loginAuthenticationData });
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

  public async refresh(): Promise<AccountData> {
    if (!this.user.accountData)
      return Promise.reject();

    const accountData = await this.post<AccountData>({ schema: AccountSchema, url: '/refresh', init: { credentials: 'include' } });
    this.user.login(accountData);
    return accountData;
  }

  public async updateAuthentication(updateAuthenticationData: UpdateAuthenticationData): Promise<AccountData> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.put<AccountData>({ schema: AccountSchema, url: `/${this.user.accountData.id}`, data: updateAuthenticationData });
  }

}

export default AuthenticationService;