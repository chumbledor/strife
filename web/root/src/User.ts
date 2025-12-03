import { Account } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export default class User {

  private _accountData?: Account.Data = this.load();
  public get accountData(): Account.Data | undefined {
    return this._accountData;
  }

  public login(accountData: Account.Data): void {
    this._accountData = accountData;
    localStorage.setItem(typeof User, JSON.stringify(this._accountData))
  }

  public logout(): void {
    this._accountData = undefined;
    localStorage.removeItem(typeof User);
  }

  private load(): Account.Data | undefined {
    if (!localStorage)
      return;
    
    const accountJson = localStorage.getItem(typeof User);
    if (!accountJson)
      return;

    const accountObject = JSON.parse(accountJson);
    if (!accountObject)
      return;

    try {
      const accountData = Account.Schema.parse(accountObject);
      return accountData;
    } catch (error: any) {
      return;
    }
  }

}