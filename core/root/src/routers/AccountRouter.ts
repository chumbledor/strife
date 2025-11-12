import di from '@/DependencyInjection.js';
import { AccountDeleteUnauthorizedError, AccountUpdateUnauthorizedError } from '@/errors/account.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { SQLServiceId } from '@interfaces/ISQL.js';
import { type IUser } from '@interfaces/IUser.js';
import { AccountRouterServiceId, type IAccountRouter } from '@interfaces/routers/IAccountRouter.js';
import { AccountSchema, CreateAccountSchema, GetAccountsSchema, AccountIdSchema, UpdateAccountSchema, type AccountData } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
class AccountRouter extends BaseRouter implements IAccountRouter {

  protected override get prefix(): string | undefined {
    return 'accounts';
  }

  protected override async routes(instance: FastifyInstance): Promise<void> {
    super.routes(instance);
    instance.post('/', this.createAccount.bind(this));
    instance.delete('/:accountId', { onRequest: [ instance.authenticate ] }, this.deleteAccount.bind(this));
    instance.get('/:accountId', this.getAccount.bind(this));
    instance.get('/', this.getAccounts.bind(this));
    instance.put('/:accountId', { onRequest: [ instance.authenticate ] }, this.updateAccount.bind(this));
  }

  private async createAccount(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const sql = await di.getAsync(SQLServiceId);
    const data = await CreateAccountSchema.parseAsync(request.body);
    const account = await sql.account.createAccount(data);
    const accountData = await AccountSchema.parseAsync(account);
    return accountData;
  }

  private async deleteAccount(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const sql = await di.getAsync(SQLServiceId);
    const user = request.user as IUser;
    const { accountId } = await AccountIdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AccountDeleteUnauthorizedError);

    return await sql.account.deleteAccount(user.account);
  }

  private async getAccount(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const sql = await di.getAsync(SQLServiceId);
    const { accountId } = await AccountIdSchema.parseAsync(request.params);
    const account = await sql.account.getAccount(accountId);
    const accountData = await AccountSchema.parseAsync(account);
    return accountData;
  }

  private async getAccounts(request: FastifyRequest, reply: FastifyReply): Promise<AccountData[]> {
    const sql = await di.getAsync(SQLServiceId);
    const data = await GetAccountsSchema.parseAsync(request.query);
    const accountEntities = await sql.account.getAccounts(data);
    const accountDatas = await AccountSchema.array().parseAsync(accountEntities);
    return accountDatas;
  }

  private async updateAccount(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const sql = await di.getAsync(SQLServiceId);
    const user = request.user as IUser;
    const { accountId } = await AccountIdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AccountUpdateUnauthorizedError);

    const data = await UpdateAccountSchema.parseAsync(request.body);
    const account = await sql.account.updateAccount(user.account, data);
    const accountData = await AccountSchema.parseAsync(account);
    return accountData;
  }

}

di.bind(AccountRouterServiceId).to(AccountRouter).inSingletonScope();