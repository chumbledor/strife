import di from '@/DependencyInjection.js';
import { AccountControllerServiceId } from '@/di/controllers/AccountControllerInjector.js';
import { AccountDeleteUnauthorizedError, AccountUpdateUnauthorizedError } from '@/errors/account.js';
import BaseRouter from '@/routers/BaseRouter.js';
import User from '@/User.js';
import { Account } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export class AccountRouter extends BaseRouter {

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

  private async createAccount(request: FastifyRequest, reply: FastifyReply): Promise<Account.Data> {
    const createData = await Account.CreateSchema.parseAsync(request.body);
    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.createAccount(createData);
  }

  private async deleteAccount(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as User;
    const { accountId } = await Account.IdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AccountDeleteUnauthorizedError);

    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.deleteAccount(user);
  }

  private async getAccount(request: FastifyRequest, reply: FastifyReply): Promise<Account.Data> {
    const { accountId } = await Account.IdSchema.parseAsync(request.params);
    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.getAccount(accountId);
  }

  private async getAccounts(request: FastifyRequest, reply: FastifyReply): Promise<Account.Data[]> {
    const getData = await Account.GetSchema.parseAsync(request.query);
    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.getAccounts(getData);
  }

  private async updateAccount(request: FastifyRequest, reply: FastifyReply): Promise<Account.Data> {
    const user = request.user as User;
    const { accountId } = await Account.IdSchema.parseAsync(request.params);
    if (!user.is(accountId))
      return Promise.reject(AccountUpdateUnauthorizedError);

    const updateData = await Account.UpdateSchema.parseAsync(request.body);
    const accountController = await di.getAsync(AccountControllerServiceId);
    return accountController.updateAccount(user, updateData);
  }

}

export default AccountRouter;