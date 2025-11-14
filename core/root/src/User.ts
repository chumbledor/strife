import { type IUser } from '@interfaces/IUser.js';
import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { SQLServiceId } from '@/di/SQLInjector.js';
import di from '@/DependencyInjection.js';

export default class User implements IUser {

  public static async from(accountId: string): Promise<IUser> {
    const user = new User();
    await user.initialize(accountId);
    return user;
  }

  private _account!: IAccountEntity;
  public get account(): IAccountEntity {
    return this._account;
  }

  private constructor() {}

  public is(id: string): boolean {
    return this.account != null && this.account.id == id;
  }

  private async initialize(accountId: string): Promise<void> {
    const sql = await di.getAsync(SQLServiceId);
    this._account = await sql.account.findOneOrFail({ id: accountId });
  }

}