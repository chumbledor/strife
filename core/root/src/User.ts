import { type IAccountEntity } from "@interfaces/entities/IAccount.entity.js";
import { type IUser } from "@interfaces/IUser.js";

export default class User implements IUser {

  private _account: IAccountEntity;
  public get account(): IAccountEntity {
    return this._account;
  }

  public constructor(account: IAccountEntity) {
    this._account = account;
  }

  public is(id: string): boolean {
    return this.account != null && this.account.id == id;
  }

}