import BaseController from "../controllers/BaseController.js";
import { IAuthenticationController } from '../../interfaces/controllers/IAuthenticationController.js';
import { type IUser } from "../../interfaces/IUser.js";
import { type AccountData, type LoginAuthenticationData, type UpdateAuthenticationData } from '@strife/common';
export default class AuthenticationController extends BaseController implements IAuthenticationController {
    login(loginAuthenticationData: LoginAuthenticationData): Promise<AccountData>;
    logout(user: IUser): Promise<void>;
    refresh(refreshToken: string): Promise<AccountData>;
    updateAuthentication(user: IUser, updateAuthenticationData: UpdateAuthenticationData): Promise<AccountData>;
    private generateAccessToken;
    private generateRefreshToken;
}
