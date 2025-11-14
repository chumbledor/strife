var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseController from "../controllers/BaseController.js";
import di from '../DependencyInjection.js';
import { AppServiceId } from '../di/AppInjector.js';
import AccountEntity from '../entities/Account.entity.js';
import { AuthenticationLoginInvalidEmailOrPasswordError, AuthenticationRefreshInvalidRefreshTokenError } from '../errors/authentication.js';
import { AccountSchema } from '@strife/common';
import { injectable } from "inversify";
let AuthenticationController = class AuthenticationController extends BaseController {
    async login(loginAuthenticationData) {
        const accountEntity = await this.sql.authentication.getEntityManager().findOneOrFail(AccountEntity, { email: loginAuthenticationData.email }, { populate: ['authentication.password'] });
        const authenticationEntity = accountEntity.authentication;
        const isPasswordVerified = await authenticationEntity.verifyPassword(loginAuthenticationData.password);
        if (!isPasswordVerified)
            return Promise.reject(AuthenticationLoginInvalidEmailOrPasswordError);
        const accountId = accountEntity.id;
        authenticationEntity.accessToken = await this.generateAccessToken(accountId);
        authenticationEntity.refreshToken = await this.generateRefreshToken(accountId);
        await this.sql.authentication.getEntityManager().flush();
        return AccountSchema.parseAsync(authenticationEntity.account);
    }
    async logout(user) {
        const authenticationEntity = user.account.authentication;
        authenticationEntity.accessToken = undefined;
        await this.sql.authentication.getEntityManager().flush();
    }
    async refresh(refreshToken) {
        const app = await di.getAsync(AppServiceId);
        const { accountId } = app.instance.jwt.verify(refreshToken);
        const authenticationEntity = await this.sql.authentication.findOneOrFail({ account: accountId });
        if (refreshToken == authenticationEntity.refreshToken)
            return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);
        authenticationEntity.accessToken = await this.generateAccessToken(accountId);
        authenticationEntity.refreshToken = await this.generateRefreshToken(accountId);
        await this.sql.authentication.getEntityManager().flush();
        return AccountSchema.parseAsync(authenticationEntity.account);
    }
    async updateAuthentication(user, updateAuthenticationData) {
        const authenticationEntity = user.account.authentication;
        Object.assign(authenticationEntity, updateAuthenticationData);
        await this.sql.authentication.getEntityManager().flush();
        return AccountSchema.parseAsync(authenticationEntity.account);
    }
    async generateAccessToken(accountId) {
        const app = await di.getAsync(AppServiceId);
        return app.instance.jwt.sign({ accountId, type: 'access' }, { expiresIn: '7d' });
    }
    async generateRefreshToken(accountId) {
        const app = await di.getAsync(AppServiceId);
        return app.instance.jwt.sign({ accountId, type: 'refresh' }, { expiresIn: '7d' });
    }
};
AuthenticationController = __decorate([
    injectable()
], AuthenticationController);
export default AuthenticationController;
