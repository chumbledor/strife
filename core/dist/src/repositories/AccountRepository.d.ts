import BaseRepository from '../repositories/BaseRepository.js';
import { type IAccountEntity } from '../../interfaces/entities/IAccount.entity.js';
import { type IAccountRepository } from '../../interfaces/repositories/IAccountRepository.js';
import { type QBFilterQuery } from '@mikro-orm/core';
import { type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';
export default class AccountRepository extends BaseRepository<IAccountEntity> implements IAccountRepository {
    existsAccount(where: QBFilterQuery<IAccountEntity>): Promise<boolean>;
    createAccount(data: CreateAccountData): Promise<IAccountEntity>;
    deleteAccount(account: IAccountEntity): Promise<void>;
    getAccount(id: string): Promise<IAccountEntity>;
    getAccounts(data: GetAccountsData): Promise<IAccountEntity[]>;
    updateAccount(account: IAccountEntity, data: UpdateAccountData): Promise<IAccountEntity>;
}
