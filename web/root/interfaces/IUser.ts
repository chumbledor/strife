import type { AccountData } from '@strife/common';
import { ServiceIdentifier } from 'inversify';

export interface IUser {
  account?: AccountData;
  login(accountData: AccountData): void;
  logout(): void;
}

export const UserServiceId: ServiceIdentifier<IUser> = Symbol.for('UserServiceId');