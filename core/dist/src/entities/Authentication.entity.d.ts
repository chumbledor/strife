import AccountEntity from '../entities/Account.entity.js';
import BaseEntity from '../entities/Base.entity.js';
import { IAuthenticationEntity } from '../../interfaces/entities/IAuthentication.entity.js';
import { type EventArgs } from '@mikro-orm/core';
export default class AuthenticationEntity extends BaseEntity implements IAuthenticationEntity {
    account: AccountEntity;
    password: string;
    accessToken?: string;
    refreshToken?: string;
    hashPassword(args: EventArgs<AuthenticationEntity>): Promise<void>;
    verifyPassword(password: string): Promise<boolean>;
}
