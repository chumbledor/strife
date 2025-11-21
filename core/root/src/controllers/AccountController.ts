import BaseController from '@/controllers/BaseController.js';
import AccountEntity from '@/entities/Account.entity.js';
import AuthenticationEntity from '@/entities/Authentication.entity.js';
import { AccountCreateEmailInUseError, AccountCreateUsernameInUseError } from '@/errors/account.js';
import { type IAccountController } from '@interfaces/controllers/IAccountController.js';
import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { type FilterQuery, type QBFilterQuery } from '@mikro-orm/core';
import { type IUser } from '@interfaces/IUser.js';
import { AccountSchema, type AccountData, type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class AccountController extends BaseController implements IAccountController {

  public async existsAccount(where: QBFilterQuery<IAccountEntity>): Promise<boolean> {
    const count = await this.sql.account.qb()
      .where(where)
      .getCount();
    return count > 0;
  }

  public async createAccount(createAccountData: CreateAccountData): Promise<AccountData> {
    const isEmailInUse = await this.existsAccount({ email: createAccountData.email });
    if (isEmailInUse)
      return Promise.reject(AccountCreateEmailInUseError);

    const isUsernameInUse = await this.existsAccount({ username: createAccountData.username });
    if (isUsernameInUse)
      return Promise.reject(AccountCreateUsernameInUseError);

    const accountEntity = new AccountEntity();
    const authenticationEntity = new AuthenticationEntity();

    accountEntity.authentication = authenticationEntity;
    accountEntity.email = createAccountData.email;
    accountEntity.username = createAccountData.username;

    authenticationEntity.account = accountEntity;
    authenticationEntity.password = createAccountData.password;

    await this.sql.account.getEntityManager().persistAndFlush(accountEntity);
    return AccountSchema.parseAsync(accountEntity);
  }
  
  public async deleteAccount(user: IUser): Promise<void> {
    const accountEntity = user.account;
    return this.sql.account.getEntityManager().removeAndFlush(accountEntity);
  }

  public async getAccount(accountId: string): Promise<AccountData> {
    const accountEntity = await this.sql.account.findOneOrFail({ id: accountId });
    return AccountSchema.parseAsync(accountEntity);
  }

  public async getAccounts(getAccountsData: GetAccountsData): Promise<AccountData[]> {
    const where: FilterQuery<IAccountEntity> = {};
    
    if (getAccountsData.ids && getAccountsData.ids.length > 0)
      where.id = { $in: getAccountsData.ids };

    if (getAccountsData.username)
      where.username = { $like: `%${getAccountsData.username}` };

    const accountEntities = await this.sql.account.find(
      where, 
      { 
        offset: getAccountsData.skip, 
        limit: getAccountsData.take, orderBy: 
        { id: 'ASC' } 
      }
    );

    return await AccountSchema.array().parseAsync(accountEntities);
  }

  public async updateAccount(user: IUser, updateAccountData: UpdateAccountData): Promise<AccountData> {
    const accountEntity = user.account;
    Object.assign(accountEntity, updateAccountData);
    await this.sql.account.getEntityManager().flush();
    return await AccountSchema.parseAsync(accountEntity);
  }

}

export default AccountController;