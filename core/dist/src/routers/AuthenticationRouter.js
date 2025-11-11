var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import { AuthenticationLogoutError, AuthenticationRefreshInvalidRefreshTokenError, AuthenticationUpdateUnauthorizedError } from '../errors/authentication.js';
import BaseRouter from '../routers/BaseRouter.js';
import { SQLServiceId } from '../../interfaces/ISQL.js';
import { AuthenticationRouterServiceId } from '../../interfaces/routers/IAuthenticationRouter.js';
import { AccountSchema, IdSchema, LoginAuthenticationSchema, UpdateAuthenticationSchema } from '@strife/common';
import { injectable } from 'inversify';
let AuthenticationRouter = class AuthenticationRouter extends BaseRouter {
    get prefix() {
        return 'authentication';
    }
    async routes(instance) {
        super.routes(instance);
        instance.post('/', this.login.bind(this));
        instance.delete('/:id', { onRequest: [instance.authenticate] }, this.logout.bind(this));
        instance.post('/refresh', this.refresh.bind(this));
        instance.put('/:id', { onRequest: [instance.authenticate] }, this.updateAuthentication.bind(this));
    }
    async login(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const data = await LoginAuthenticationSchema.parseAsync(request.body);
        const authentication = await sql.authentication.login(data);
        this.updateRefreshTokenCookie(authentication, request, reply);
        const account = authentication.account;
        const accountData = await AccountSchema.parseAsync(account);
        return accountData;
    }
    async logout(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const user = request.user;
        const { id } = await IdSchema.parseAsync(request.params);
        if (!user.is(id))
            return Promise.reject(AuthenticationLogoutError);
        await sql.authentication.logout(user.account);
    }
    async refresh(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const { refreshToken } = request.cookies;
        if (!refreshToken)
            return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);
        const authentication = await sql.authentication.refresh(refreshToken);
        this.updateRefreshTokenCookie(authentication, request, reply);
        const account = authentication.account;
        const accountData = await AccountSchema.parseAsync(account);
        return accountData;
    }
    async updateAuthentication(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const user = request.user;
        const { id } = await IdSchema.parseAsync(request.params);
        if (!user.is(id))
            return Promise.reject(AuthenticationUpdateUnauthorizedError);
        const data = await UpdateAuthenticationSchema.parseAsync(request.body);
        const authentication = await sql.authentication.updateAuthentication(user.account, data);
        const account = authentication.account;
        const accountData = await AccountSchema.parseAsync(account);
        return accountData;
    }
    updateRefreshTokenCookie(authentication, request, reply) {
        if (!authentication.refreshToken)
            return;
        reply.setCookie('refreshToken', authentication.refreshToken, {
            path: `${this.prefix}/refresh`,
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
AuthenticationRouter = __decorate([
    injectable()
], AuthenticationRouter);
di.bind(AuthenticationRouterServiceId).to(AuthenticationRouter).inSingletonScope();
