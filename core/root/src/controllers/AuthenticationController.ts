import BaseController from "@/controllers/BaseController.js";
import di from '@/DependencyInjection.js';
import { AppServiceId } from '@/di/AppInjector.js';
import AccountEntity from '@/entities/Account.entity.js';
import { AuthenticationLoginInvalidEmailOrPasswordError, AuthenticationRefreshInvalidRefreshTokenError } from '@/errors/authentication.js';
import { type IAuthenticationController } from '@interfaces/controllers/IAuthenticationController.js';
import { type IUser } from "@interfaces/IUser.js";
import { AccountSchema, type AccountData, type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';
import { injectable } from "inversify";

@injectable()
export class AuthenticationController extends BaseController implements IAuthenticationController {

  public async login(loginAuthenticationData: LoginAuthenticationData): Promise<AccountData> {
    const accountEntity = await this.sql.authentication.getEntityManager().findOneOrFail(
      AccountEntity, 
      { email: loginAuthenticationData.email }, 
      { populate: [ 'authentication.password' ] }
    );

    const authenticationEntity = accountEntity.authentication;

    const isPasswordVerified = await authenticationEntity.verifyPassword(loginAuthenticationData.password);
    if (!isPasswordVerified)
      return Promise.reject(AuthenticationLoginInvalidEmailOrPasswordError);

    const accountId = accountEntity.id;

    authenticationEntity.accessToken = await this.generateAccessToken(accountId);
    authenticationEntity.refreshToken = await this.generateRefreshToken(accountId);

    await this.sql.authentication.getEntityManager().flush();
    return AccountSchema.parseAsync(authenticationEntity.account);
  }

  public async logout(user: IUser): Promise<void> {
    const authenticationEntity = user.account.authentication;
    authenticationEntity.accessToken = undefined;
    await this.sql.authentication.getEntityManager().flush();
  }

  public async refresh(refreshToken: string): Promise<AccountData> {
    const app = await di.getAsync(AppServiceId);
    const { accountId } = app.instance.jwt.verify<{ accountId: string, type: string }>(refreshToken);
    const authenticationEntity = await this.sql.authentication.findOneOrFail({ account: accountId });
    if (refreshToken == authenticationEntity.refreshToken)
      return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);

    authenticationEntity.accessToken = await this.generateAccessToken(accountId);
    authenticationEntity.refreshToken = await this.generateRefreshToken(accountId);

    await this.sql.authentication.getEntityManager().flush();
    return AccountSchema.parseAsync(authenticationEntity.account);
  }

  public async updateAuthentication(user: IUser, updateAuthenticationData: UpdateAuthenticationData): Promise<AccountData> {
    const authenticationEntity = user.account.authentication;
    Object.assign(authenticationEntity, updateAuthenticationData);
    await this.sql.authentication.getEntityManager().flush();
    return AccountSchema.parseAsync(authenticationEntity.account);
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