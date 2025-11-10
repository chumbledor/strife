import di from '../DependencyInjection.js';
import AccountEntity from '../entities/Account.entity.js';
import { AuthenticationLoginInvalidEmailOrPasswordError, AuthenticationRefreshInvalidRefreshTokenError } from '../errors/authentication.js';
import BaseRepository from "../repositories/BaseRepository.js";
import { AppServiceId } from '../../interfaces/IApp.js';
export default class AuthenticationRepository extends BaseRepository {
    async login(data) {
        const account = await this.em.findOneOrFail(AccountEntity, { email: data.email }, { populate: ['authentication.password'] });
        const authentication = account.authentication;
        const isPasswordVerified = await authentication.verifyPassword(data.password);
        if (!isPasswordVerified)
            return Promise.reject(AuthenticationLoginInvalidEmailOrPasswordError);
        const id = account.id;
        authentication.accessToken = await this.generateAccessToken(id);
        authentication.refreshToken = await this.generateRefreshToken(id);
        await this.em.flush();
        return authentication;
    }
    async logout(account) {
        account.authentication.accessToken = undefined;
        await this.em.flush();
        return Promise.resolve();
    }
    async refresh(refreshToken) {
        const app = await di.getAsync(AppServiceId);
        const { id } = app.instance.jwt.verify(refreshToken);
        const authentication = await this.findOneOrFail({ account: id });
        if (refreshToken == authentication.refreshToken)
            return Promise.reject(AuthenticationRefreshInvalidRefreshTokenError);
        authentication.accessToken = await this.generateAccessToken(id);
        authentication.refreshToken = await this.generateRefreshToken(id);
        await this.em.flush();
        return authentication;
    }
    async updateAuthentication(account, data) {
        Object.assign(account.authentication, data);
        await this.em.flush();
        return account.authentication;
    }
    async generateAccessToken(id) {
        const app = await di.getAsync(AppServiceId);
        return app.instance.jwt.sign({ id, type: 'access' }, { expiresIn: '7d' });
    }
    async generateRefreshToken(id) {
        const app = await di.getAsync(AppServiceId);
        return app.instance.jwt.sign({ id, type: 'refresh' }, { expiresIn: '7d' });
    }
}
