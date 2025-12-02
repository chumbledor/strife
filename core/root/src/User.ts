import di from '@/DependencyInjection.js';
import { SQLServiceId } from '@/di/SQLInjector.js';
import AccountEntity from '@/entities/Account.entity.js';

export class User {

  public static async from(accountId: string): Promise<User> {
    const user = new User();
    await user.initialize(accountId);
    return user;
  }

  private _account!: AccountEntity;
  public get account(): AccountEntity {
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

export default User;