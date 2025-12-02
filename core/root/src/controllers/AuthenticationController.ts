import BaseController from '@/controllers/BaseController.js';
import di from '@/DependencyInjection.js';
import { AppServiceId } from '@/di/AppInjector.js';
import AccountEntity from '@/entities/Account.entity.js';
import { AuthenticationLoginInvalidEmailOrPasswordError, AuthenticationRefreshInvalidRefreshTokenError } from '@/errors/authentication.js';
import User from '@/User.js';
import { Account, Authentication } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class AuthenticationController extends BaseController {

  public async login(loginData: Authentication.LoginData): Promise<Account.Data> {
    const accountEntity = await this.sql.authentication.getEntityManager().findOneOrFail(
      AccountEntity, 
      { email: loginData.email }, 
      { populate: [ 'authentication.password' ] }
    );

    const authenticationEntity = accountEntity.authentication;

    const isPasswordVerified = await authenticationEntity.verifyPassword(loginData.password);
    if (!isPasswordVerified)
      return Promise.reject(AuthenticationLoginInvalidEmailOrPasswordError);

    const accountId = accountEntity.id;

    authenticationEntity.accessToken = await this.generateAccessToken(accountId);
    authenticationEntity.refreshToken = await this.generateRefreshToken(accountId);

    await this.sql.authentication.getEntityManager().flush();
    return Account.Schema.parseAsync(authenticationEntity.account);
  }

  public async logout(user: User): Promise<void> {
    const authenticationEntity = user.account.authentication;
    authenticationEntity.accessToken = undefined;
    await this.sql.authentication.getEntityManager().flush();
  }

  public async refresh(refreshToken: string): Promise<Account.Data> {
    const app = await di.getAsync(AppServiceId);
    const { accountId } = app.instance.jwt.verify<{ accountId: string, type: string }>(refreshToken);
    const authenticationEntity = await this.sql.authentication.findOneOrFail({ account: accountId });
    if (refreshToken == authenticationEntity.refreshToken)
      return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);

    authenticationEntity.accessToken = await this.generateAccessToken(accountId);
    authenticationEntity.refreshToken = await this.generateRefreshToken(accountId);

    await this.sql.authentication.getEntityManager().flush();
    return Account.Schema.parseAsync(authenticationEntity.account);
  }

  public async updateAuthentication(user: User, updateData: Authentication.UpdateData): Promise<Account.Data> {
    const authenticationEntity = user.account.authentication;
    Object.assign(authenticationEntity, updateData);
    await this.sql.authentication.getEntityManager().flush();
    return Account.Schema.parseAsync(authenticationEntity.account);
  }

  private async generateAccessToken(accountId: string): Promise<string> {
    const app = await di.getAsync(AppServiceId);
    return app.instance.jwt.sign(
      { accountId, type: 'access' }, 
      { expiresIn: '7d' }
    );
  }

  private async generateRefreshToken(accountId: string): Promise<string> {
    const app = await di.getAsync(AppServiceId);
    return app.instance.jwt.sign(
      { accountId, type: 'refresh' },
      { expiresIn: '7d' }
    );
  }
  
}

export default AuthenticationController;