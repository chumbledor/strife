import { type IAccountEntity } from '../entities/IAccount.entity.js';
import { type IAuthenticationEntity } from '../entities/IAuthentication.entity.js';
import { type IBaseRepository } from '../repositories/IBaseRepository.js';
import { type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';
export interface IAuthenticationRepository extends IBaseRepository<IAuthenticationEntity> {
    login(data: LoginAuthenticationData): Promise<IAuthenticationEntity>;
    logout(account: IAccountEntity): Promise<void>;
    refresh(refreshToken: string): Promise<IAuthenticationEntity>;
    updateAuthentication(account: IAccountEntity, data: UpdateAuthenticationData): Promise<IAuthenticationEntity>;
}
