import di from '@/DependencyInjection';
import { UserServiceId, type IUser } from '@interfaces/IUser';
import { AccountSchema, type AccountData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export default class User implements IUser {

  private _account?: AccountData = this.load();
  public get account(): AccountData | undefined {
    return this._account;
  }

  public login(accountData: AccountData): void {
    this._account = accountData;
    localStorage.setItem(typeof User, JSON.stringify(this._account))
  }

  public logout(): void {
    this._account = undefined;
    localStorage.removeItem(typeof User);
  }

  private load(): AccountData | undefined {
    if (!localStorage)
      return;
    
    const accountJson = localStorage.getItem(typeof User);
    if (!accountJson)
      return;

    const accountObject = JSON.parse(accountJson);
    if (!accountObject)
      return;

    const accountData = AccountSchema.parse(accountObject);
    return accountData;
  }

}

di.bind(UserServiceId).to(User).inSingletonScope();