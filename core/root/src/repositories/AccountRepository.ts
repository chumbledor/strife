import AccountEntity from '@/entities/Account.entity.js';
import AuthenticationEntity from '@/entities/Authentication.entity.js';
import { AccountCreateEmailInUseError, AccountCreateUsernameInUseError } from '@/errors/account.js';
import BaseRepository from '@/repositories/BaseRepository.js';
import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { type IAccountRepository } from '@interfaces/repositories/IAccountRepository.js';
import { type FilterQuery, type QBFilterQuery } from '@mikro-orm/core';
import { type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';

export default class AccountRepository extends BaseRepository<IAccountEntity> implements IAccountRepository {

  async existsAccount(where: QBFilterQuery<IAccountEntity>): Promise<boolean> {
    const count = await this.qb()
      .where(where)
      .getCount();
    return count > 0;
  }

  async createAccount(data: CreateAccountData): Promise<IAccountEntity> {
    const isEmailInUse = await this.existsAccount({ email: data.email });
    if (isEmailInUse)
      return Promise.reject(AccountCreateEmailInUseError);

    const isUsernameInUse = await this.existsAccount({ username: data.username });
    if (isUsernameInUse)
      return Promise.reject(AccountCreateUsernameInUseError);

    const account = new AccountEntity();
    const authentication = new AuthenticationEntity();

    account.authentication = authentication;
    account.email = data.email;
    account.username = data.username;

    authentication.account = account;
    authentication.password = data.password;

    await this.em.persistAndFlush(account);

    return account;
  }
  
  async deleteAccount(account: IAccountEntity): Promise<void> {
    await this.em.removeAndFlush(account);
  }

  async getAccount(id: string): Promise<IAccountEntity> {
    return await this.findOneOrFail({ id });
  }

  async getAccounts(data: GetAccountsData): Promise<IAccountEntity[]> {
    const where: FilterQuery<IAccountEntity> = {};
    
    if (data.ids && data.ids.length > 0)
      where.id = { $in: data.ids };

    if (data.username)
      where.username = { $like: `%${data.username}` };

    return await this.find(
      where, 
      { 
        offset: data.skip, 
        limit: data.take, orderBy: 
        { id: 'ASC' } 
      }
    );
  }

  async updateAccount(account: IAccountEntity, data: UpdateAccountData): Promise<IAccountEntity> {
    Object.assign(account, data);
    await this.em.flush();
    return account;
  }

}