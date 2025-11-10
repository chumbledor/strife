import di from '@/DependencyInjection.js';
import AccountEntity from '@/entities/Account.entity.js';
import AuthenticationEntity from '@/entities/Authentication.entity.js';
import { AuthenticationLoginInvalidEmailOrPasswordError, AuthenticationRefreshInvalidRefreshTokenError } from '@/errors/authentication.js';
import BaseRepository from "@/repositories/BaseRepository.js";
import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { type IAuthenticationEntity } from '@interfaces/entities/IAuthentication.entity.js';
import { AppServiceId } from '@interfaces/IApp.js';
import { IAuthenticationRepository } from '@interfaces/repositories/IAuthenticationRepository.js';
import { type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';

export default class AuthenticationRepository extends BaseRepository<AuthenticationEntity> implements IAuthenticationRepository {

  public async login(data: LoginAuthenticationData): Promise<IAuthenticationEntity> {
    const account = await this.em.findOneOrFail(
      AccountEntity, 
      { email: data.email }, 
      { populate: [ 'authentication.password' ] }
    );

    const authentication = account.authentication;

    const isPasswordVerified = await authentication.verifyPassword(data.password);
    if (!isPasswordVerified)
      return Promise.reject(AuthenticationLoginInvalidEmailOrPasswordError);

    const id = account.id;

    authentication.accessToken = await this.generateAccessToken(id);
    authentication.refreshToken = await this.generateRefreshToken(id);

    await this.em.flush();

    return authentication;
  }

  public async logout(account: IAccountEntity): Promise<void> {
    account.authentication.accessToken = undefined;
    await this.em.flush();
    return Promise.resolve();
  }

  public async refresh(refreshToken: string): Promise<IAuthenticationEntity> {
    const app = await di.getAsync(AppServiceId);
    const { id } = app.instance.jwt.verify<{ id: string, type: string }>(refreshToken);
    const authentication = await this.findOneOrFail({ account: id });
    if (refreshToken == authentication.refreshToken)
      return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);

    authentication.accessToken = await this.generateAccessToken(id);
    authentication.refreshToken = await this.generateRefreshToken(id);

    await this.em.flush();
    
    return authentication;
  }

  public async updateAuthentication(account: IAccountEntity, data: UpdateAuthenticationData): Promise<IAuthenticationEntity> {
    Object.assign(account.authentication, data);
    await this.em.flush();
    return account.authentication;
  }

  private async generateAccessToken(id: string): Promise<string> {
    const app = await di.getAsync(AppServiceId);
    return app.instance.jwt.sign(
      { id, type: 'access' }, 
      { expiresIn: '7d' }
    );
  }

  private async generateRefreshToken(id: string): Promise<string> {
    const app = await di.getAsync(AppServiceId);
    return app.instance.jwt.sign(
      { id, type: 'refresh' },
      { expiresIn: '7d' }
    );
  }
  
}