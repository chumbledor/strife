import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { type IBaseRepository } from '@interfaces/repositories/IBaseRepository.js';
import { type QBFilterQuery } from '@mikro-orm/core';
import { type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';

export interface IAccountRepository extends IBaseRepository<IAccountEntity> {
  existsAccount(where: QBFilterQuery<IAccountEntity>): Promise<boolean>;
  createAccount(data: CreateAccountData): Promise<IAccountEntity>;
  deleteAccount(account: IAccountEntity): Promise<void>;
  getAccount(id: string): Promise<IAccountEntity>;
  getAccounts(data: GetAccountsData): Promise<IAccountEntity[]>;
  updateAccount(account: IAccountEntity, data: UpdateAccountData): Promise<IAccountEntity>;
}