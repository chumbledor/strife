import di from '@/DependencyInjection.js';
import { AuthenticationControllerServiceId } from '@/di/controllers/AuthenticationControllerInjector.js';
import { AuthenticationLogoutError, AuthenticationRefreshInvalidRefreshTokenError, AuthenticationUpdateUnauthorizedError } from '@/errors/authentication.js';
import BaseRouter from '@/routers/BaseRouter.js';
import User from '@/User.js';
import { Account, Authentication } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export class AuthenticationRouter extends BaseRouter {

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

  private async login(request: FastifyRequest, reply: FastifyReply): Promise<Account.Data> {
    const loginData = await Authentication.LoginSchema.parseAsync(request.body);
    const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
    const accountData = await authenticationController.login(loginData);
    // this.updateRefreshTokenCookie(accountData, request, reply);
    return accountData;
  }

  private async logout(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as User;
    const { accountId } = await Account.IdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AuthenticationLogoutError);
    
    const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
    await authenticationController.logout(user);
  }

  private async refresh(request: FastifyRequest, reply: FastifyReply): Promise<Account.Data> {
    const { refreshToken } = request.cookies;
    if (!refreshToken)
      return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);

    const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
    const accountData = await authenticationController.refresh(refreshToken);
    // this.updateRefreshTokenCookie(accountData, request, reply);
    return accountData;
  }

  private async updateAuthentication(request: FastifyRequest, reply: FastifyReply): Promise<Account.Data> {
    const user = request.user as User;
    const { accountId } = await Account.IdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AuthenticationUpdateUnauthorizedError);
    
    const updateData = await Authentication.UpdateSchema.parseAsync(request.body);
    const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
    return authenticationController.updateAuthentication(user, updateData);
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

export default AuthenticationRouter;