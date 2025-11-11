import di from '@/DependencyInjection.js';
import { AuthenticationLogoutError, AuthenticationRefreshInvalidRefreshTokenError, AuthenticationUpdateUnauthorizedError } from '@/errors/authentication.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { type IAuthenticationEntity } from '@interfaces/entities/IAuthentication.entity.js';
import { SQLServiceId } from '@root/interfaces/ISQL.js';
import { type IUser } from '@interfaces/IUser.js';
import { AuthenticationRouterServiceId, type IAuthenticationRouter } from '@interfaces/routers/IAuthenticationRouter.js';
import { AccountSchema, IdSchema, LoginAuthenticationSchema, UpdateAuthenticationSchema, type AccountData } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
class AuthenticationRouter extends BaseRouter implements IAuthenticationRouter {

  protected override get prefix(): string | undefined {
    return 'authentication';
  }

  protected override async routes(instance: FastifyInstance): Promise<void> {
    super.routes(instance);
    instance.post('/', this.login.bind(this));
    instance.delete('/:id', { onRequest: [ instance.authenticate ] }, this.logout.bind(this));
    instance.post('/refresh', this.refresh.bind(this));
    instance.put('/:id', { onRequest: [ instance.authenticate ] }, this.updateAuthentication.bind(this));
  }

  private async login(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const sql = await di.getAsync(SQLServiceId);
    const data = await LoginAuthenticationSchema.parseAsync(request.body);
    const authentication = await sql.authentication.login(data);
    this.updateRefreshTokenCookie(authentication, request, reply);
    const account = authentication.account;
    const accountData = await AccountSchema.parseAsync(account);
    return accountData;
  }

  private async logout(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const sql = await di.getAsync(SQLServiceId);
    const user = request.user as IUser;
    const { id } = await IdSchema.parseAsync(request.params);
    if (!user.is(id))
      return Promise.reject(AuthenticationLogoutError);
    
    await sql.authentication.logout(user.account);
  }

  private async refresh(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const sql = await di.getAsync(SQLServiceId);
    const { refreshToken } = request.cookies;
    if (!refreshToken)
      return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);

    const authentication = await sql.authentication.refresh(refreshToken);
    this.updateRefreshTokenCookie(authentication, request, reply);
    const account = authentication.account;
    const accountData = await AccountSchema.parseAsync(account);
    return accountData;
  }

  private async updateAuthentication(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const sql = await di.getAsync(SQLServiceId);
    const user = request.user as IUser;
    const { id } = await IdSchema.parseAsync(request.params);
    if (!user.is(id))
      return Promise.reject(AuthenticationUpdateUnauthorizedError);
    
    const data = await UpdateAuthenticationSchema.parseAsync(request.body);
    const authentication = await sql.authentication.updateAuthentication(user.account, data);
    const account = authentication.account;
    const accountData = await AccountSchema.parseAsync(account);
    return accountData;
  }

  private updateRefreshTokenCookie(authentication: IAuthenticationEntity, request: FastifyRequest, reply: FastifyReply): void {
    if (!authentication.refreshToken)
      return;
    
    reply.setCookie(
      'refreshToken', 
      authentication.refreshToken,
      {
        path: `${this.prefix}/refresh`,
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
        maxAge: 60 * 60 * 24 * 7
      }
    );
  }

}

di.bind(AuthenticationRouterServiceId).to(AuthenticationRouter).inSingletonScope();