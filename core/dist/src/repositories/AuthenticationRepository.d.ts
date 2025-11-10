import AuthenticationEntity from '../entities/Authentication.entity.js';
import BaseRepository from "../repositories/BaseRepository.js";
import { type IAccountEntity } from '../../interfaces/entities/IAccount.entity.js';
import { type IAuthenticationEntity } from '../../interfaces/entities/IAuthentication.entity.js';
import { IAuthenticationRepository } from '../../interfaces/repositories/IAuthenticationRepository.js';
import { type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';
export default class AuthenticationRepository extends BaseRepository<AuthenticationEntity> implements IAuthenticationRepository {
    login(data: LoginAuthenticationData): Promise<IAuthenticationEntity>;
    logout(account: IAccountEntity): Promise<void>;
    refresh(refreshToken: string): Promise<IAuthenticationEntity>;
    updateAuthentication(account: IAccountEntity, data: UpdateAuthenticationData): Promise<IAuthenticationEntity>;
    private generateAccessToken;
    private generateRefreshToken;
}
