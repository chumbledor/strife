import { type IAccountEntity } from './entities/IAccount.entity.js';
export interface IUser {
    account: IAccountEntity;
    is(id: string): boolean;
}
