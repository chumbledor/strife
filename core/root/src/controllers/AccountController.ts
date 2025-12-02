import BaseController from '@/controllers/BaseController.js';
import AccountEntity from '@/entities/Account.entity.js';
import AuthenticationEntity from '@/entities/Authentication.entity.js';
import { AccountCreateEmailInUseError, AccountCreateUsernameInUseError } from '@/errors/account.js';
import User from '@/User.js';
import { type FilterQuery, type QBFilterQuery } from '@mikro-orm/core';
import { Account } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class AccountController extends BaseController {

  public async existsAccount(where: QBFilterQuery<AccountEntity>): Promise<boolean> {
    const count = await this.sql.account.qb()
      .where(where)
      .getCount();
    return count > 0;
  }

  public async createAccount(createData: Account.CreateData): Promise<Account.Data> {
    const isEmailInUse = await this.existsAccount({ email: createData.email });
    if (isEmailInUse)
      return Promise.reject(AccountCreateEmailInUseError);

    const isUsernameInUse = await this.existsAccount({ username: createData.username });
    if (isUsernameInUse)
      return Promise.reject(AccountCreateUsernameInUseError);

    const accountEntity = new AccountEntity();
    const authenticationEntity = new AuthenticationEntity();

    accountEntity.authentication = authenticationEntity;
    accountEntity.email = createData.email;
    accountEntity.username = createData.username;

    authenticationEntity.account = accountEntity;
    authenticationEntity.password = createData.password;

    await this.sql.account.getEntityManager().persistAndFlush(accountEntity);
    return Account.Schema.parseAsync(accountEntity);
  }
  
  public async deleteAccount(user: User): Promise<void> {
    const accountEntity = user.account;
    return this.sql.account.getEntityManager().removeAndFlush(accountEntity);
  }

  public async getAccount(accountId: string): Promise<Account.Data> {
    const accountEntity = await this.sql.account.findOneOrFail({ id: accountId });
    return Account.Schema.parseAsync(accountEntity);
  }

  public async getAccounts(getData: Account.GetData): Promise<Account.Data[]> {
    const where: FilterQuery<AccountEntity> = {};
    
    if (getData.ids && getData.ids.length > 0)
      where.id = { $in: getData.ids };

    if (getData.username)
      where.username = { $like: `%${getData.username}` };

    const accountEntities = await this.sql.account.find(
      where, 
      { 
        offset: getData.skip, 
        limit: getData.take, orderBy: 
        { id: 'ASC' } 
      }
    );

    return await Account.Schema.array().parseAsync(accountEntities);
  }

  public async updateAccount(user: User, updateData: Account.UpdateData): Promise<Account.Data> {
    const accountEntity = user.account;
    Object.assign(accountEntity, updateData);
    await this.sql.account.getEntityManager().flush();
    return await Account.Schema.parseAsync(accountEntity);
  }

}

export default AccountController;