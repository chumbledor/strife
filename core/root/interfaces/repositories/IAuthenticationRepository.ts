import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { type IAuthenticationEntity } from '@interfaces/entities/IAuthentication.entity.js';
import { type IBaseRepository } from '@interfaces/repositories/IBaseRepository.js';
import { type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';

export interface IAuthenticationRepository extends IBaseRepository<IAuthenticationEntity> {
  login(data: LoginAuthenticationData): Promise<IAuthenticationEntity>;
  logout(account: IAccountEntity): Promise<void>;
  refresh(refreshToken: string): Promise<IAuthenticationEntity>;
  updateAuthentication(account: IAccountEntity, data: UpdateAuthenticationData): Promise<IAuthenticationEntity>;
}