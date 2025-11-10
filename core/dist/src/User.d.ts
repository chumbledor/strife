import { type IAccountEntity } from "../interfaces/entities/IAccount.entity.js";
import { type IUser } from "../interfaces/IUser.js";
export default class User implements IUser {
    private _account;
    get account(): IAccountEntity;
    constructor(account: IAccountEntity);
    is(id: string): boolean;
}
