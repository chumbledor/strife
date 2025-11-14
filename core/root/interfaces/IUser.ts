import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';

export interface IUser {
  account: IAccountEntity;
  is(id: string): boolean;
}