import { type IBaseService } from '@interfaces/services/IBaseService';
import { type AccountData, type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';

export interface IAuthenticationService extends IBaseService {
  login(loginAuthenticationData: LoginAuthenticationData): Promise<AccountData>;
  logout(): Promise<void>;
  refresh(): Promise<AccountData>;
  updateAuthentication(updateAuthenticationData: UpdateAuthenticationData): Promise<AccountData>;
}