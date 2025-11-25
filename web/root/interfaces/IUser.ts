import type { AccountData } from '@strife/common';

export interface IUser {
  accountData?: AccountData;
  login(accountData: AccountData): void;
  logout(): void;
}