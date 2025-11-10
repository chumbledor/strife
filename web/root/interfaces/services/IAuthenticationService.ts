import { type IBaseService } from '@interfaces/services/IBaseService';
import { type AccountData, type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';
import { type ServiceIdentifier } from 'inversify';

export interface IAuthenticationService extends IBaseService {
  login(data: LoginAuthenticationData): Promise<AccountData>;
  logout(): Promise<void>;
  refresh(): Promise<AccountData>;
  updateAuthentication(data: UpdateAuthenticationData): Promise<AccountData>;
}

export const AuthenticationServiceServiceId: ServiceIdentifier<IAuthenticationService> = Symbol.for('AuthenticationServiceServiceId');