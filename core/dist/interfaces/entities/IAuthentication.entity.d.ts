import { type IAccountEntity } from '../entities/IAccount.entity.js';
import { type IBaseEntity } from '../entities/IBase.entity.js';
import { type EventArgs } from '@mikro-orm/core';
export interface IAuthenticationEntity extends IBaseEntity {
    account: IAccountEntity;
    password: string;
    accessToken?: string;
    refreshToken?: string;
    hashPassword(args: EventArgs<IAuthenticationEntity>): Promise<void>;
    verifyPassword(password: string): Promise<boolean>;
}
