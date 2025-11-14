import { type IBaseController } from '@interfaces/controllers/IBaseController.js';
import { type IUser } from '@interfaces/IUser.js';
import { type AccountData, type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';

export interface IAuthenticationController extends IBaseController {
  login(loginAuthenticationData: LoginAuthenticationData): Promise<AccountData>;
  logout(user: IUser): Promise<void>;
  refresh(refreshToken: string): Promise<AccountData>;
  updateAuthentication(user: IUser, updateAuthenticationData: UpdateAuthenticationData): Promise<AccountData>;
}