import di from '@/DependencyInjection.js';
import { AccountControllerServiceId } from '@/di/controllers/AccountControllerInjector.js';
import { AccountDeleteUnauthorizedError, AccountUpdateUnauthorizedError } from '@/errors/account.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IAccountRouter } from '@interfaces/routers/IAccountRouter.js';
import { AccountIdSchema, CreateAccountSchema, GetAccountsSchema, UpdateAccountSchema, type AccountData } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export default class AccountRouter extends BaseRouter implements IAccountRouter {

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
    const createAccountData = await CreateAccountSchema.parseAsync(request.body);
    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.createAccount(createAccountData);
  }

  private async deleteAccount(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as IUser;
    const { accountId } = await AccountIdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AccountDeleteUnauthorizedError);

    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.deleteAccount(user);
  }

  private async getAccount(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const { accountId } = await AccountIdSchema.parseAsync(request.params);
    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.getAccount(accountId);
  }

  private async getAccounts(request: FastifyRequest, reply: FastifyReply): Promise<AccountData[]> {
    const getAccountsData = await GetAccountsSchema.parseAsync(request.query);
    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.getAccounts(getAccountsData);
  }

  private async updateAccount(request: FastifyRequest, reply: FastifyReply): Promise<AccountData> {
    const user = request.user as IUser;
    const { accountId } = await AccountIdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AccountUpdateUnauthorizedError);

    const updateAccountData = await UpdateAccountSchema.parseAsync(request.body);
    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.updateAccount(user, updateAccountData);
  }

}