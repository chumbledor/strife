import di from '@/DependencyInjection.js';
import { AuthenticationLogoutError, AuthenticationRefreshInvalidRefreshTokenError, AuthenticationUpdateUnauthorizedError } from '@/errors/authentication.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { type IAuthenticationEntity } from '@interfaces/entities/IAuthentication.entity.js';
import { AuthenticationControllerServiceId } from '@/di/controllers/AuthenticationControllerInjector.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IAuthenticationRouter } from '@interfaces/routers/IAuthenticationRouter.js';
import { AccountIdSchema, AccountSchema, LoginAuthenticationSchema, UpdateAuthenticationSchema, type AccountData } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export default class AuthenticationRouter extends BaseRouter implements IAuthenticationRouter {

  protected override get prefix(): string | undefined {
    return 'authentication';
  }

  protected override async routes(instance: FastifyInstance): Promise<void> {
    super.routes(instance);
    instance.post('/', this.login.bind(this));
    instance.delete('/:accountId', { onRequest: [ instance.authenticate ] }, this.logout.bind(this));
    instance.post('/refresh', this.refresh.bind(this));
    instance.put('/:accountId', { onRequest: [ instance.authenticate ] }, this.updateAuthentication.bind(this));
  }

  private async login(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const loginAuthenticationData = await LoginAuthenticationSchema.parseAsync(request.body);
    const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
    const accountData = await authenticationController.login(loginAuthenticationData);
    // this.updateRefreshTokenCookie(accountData, request, reply);
    return accountData;
  }

  private async logout(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as IUser;
    const { accountId } = await AccountIdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AuthenticationLogoutError);
    
    const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
    await authenticationController.logout(user);
  }

  private async refresh(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const { refreshToken } = request.cookies;
    if (!refreshToken)
      return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);

    const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
    const accountData = await authenticationController.refresh(refreshToken);
    // this.updateRefreshTokenCookie(accountData, request, reply);
    return accountData;
  }

  private async updateAuthentication(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const user = request.user as IUser;
    const { accountId } = await AccountIdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AuthenticationUpdateUnauthorizedError);
    
    const updateAuthenticationData = await UpdateAuthenticationSchema.parseAsync(request.body);
    const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
    return authenticationController.updateAuthentication(user, updateAuthenticationData);
  }

  // private updateRefreshTokenCookie(accountData: AccountData, request: FastifyRequest, reply: FastifyReply): void {
  //   if (!accountData.authentication || !accountData.authentication.refreshToken)
  //     return;
    
  //   reply.setCookie(
  //     'refreshToken', 
  //     authentication.refreshToken,
  //     {
  //       path: `${this.prefix}/refresh`,
  //       httpOnly: true,
  //       sameSite: 'lax',
  //       secure: false,
  //       maxAge: 60 * 60 * 24 * 7
  //     }
  //   );
  // }

}