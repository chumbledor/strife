import { type IUser } from '../interfaces/IUser.js';
import { type IAccountEntity } from '../interfaces/entities/IAccount.entity.js';
export default class User implements IUser {
    static from(accountId: string): Promise<IUser>;
    private _account;
    get account(): IAccountEntity;
    private constructor();
    is(id: string): boolean;
    private initialize;
}
