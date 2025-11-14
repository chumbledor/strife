var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import { AuthenticationLogoutError, AuthenticationRefreshInvalidRefreshTokenError, AuthenticationUpdateUnauthorizedError } from '../errors/authentication.js';
import BaseRouter from '../routers/BaseRouter.js';
import { AuthenticationControllerServiceId } from '../di/controllers/AuthenticationControllerInjector.js';
import { AccountIdSchema, LoginAuthenticationSchema, UpdateAuthenticationSchema } from '@strife/common';
import { injectable } from 'inversify';
let AuthenticationRouter = class AuthenticationRouter extends BaseRouter {
    get prefix() {
        return 'authentication';
    }
    async routes(instance) {
        super.routes(instance);
        instance.post('/', this.login.bind(this));
        instance.delete('/:accountId', { onRequest: [instance.authenticate] }, this.logout.bind(this));
        instance.post('/refresh', this.refresh.bind(this));
        instance.put('/:accountId', { onRequest: [instance.authenticate] }, this.updateAuthentication.bind(this));
    }
    async login(request, reply) {
        const loginAuthenticationData = await LoginAuthenticationSchema.parseAsync(request.body);
        const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
        const accountData = await authenticationController.login(loginAuthenticationData);
        // this.updateRefreshTokenCookie(accountData, request, reply);
        return accountData;
    }
    async logout(request, reply) {
        const user = request.user;
        const { accountId } = await AccountIdSchema.parseAsync(request.params);
        if (!user.is(accountId))
            return Promise.reject(AuthenticationLogoutError);
        const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
        await authenticationController.logout(user);
    }
    async refresh(request, reply) {
        const { refreshToken } = request.cookies;
        if (!refreshToken)
            return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);
        const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
        const accountData = await authenticationController.refresh(refreshToken);
        // this.updateRefreshTokenCookie(accountData, request, reply);
        return accountData;
    }
    async updateAuthentication(request, reply) {
        const user = request.user;
        const { accountId } = await AccountIdSchema.parseAsync(request.params);
        if (!user.is(accountId))
            return Promise.reject(AuthenticationUpdateUnauthorizedError);
        const updateAuthenticationData = await UpdateAuthenticationSchema.parseAsync(request.body);
        const authenticationController = await di.getAsync(AuthenticationControllerServiceId);
        return authenticationController.updateAuthentication(user, updateAuthenticationData);
    }
};
AuthenticationRouter = __decorate([
    injectable()
], AuthenticationRouter);
export default AuthenticationRouter;
