import type { AccountData } from '@strife/common';

export interface IUser {
  account?: AccountData;
  login(accountData: AccountData): void;
  logout(): void;
}