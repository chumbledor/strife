import AccountEntity from '../entities/Account.entity.js';
import AuthenticationEntity from '../entities/Authentication.entity.js';
import { AccountCreateEmailInUseError, AccountCreateUsernameInUseError } from '../errors/account.js';
import BaseRepository from '../repositories/BaseRepository.js';
export default class AccountRepository extends BaseRepository {
    async existsAccount(where) {
        const count = await this.qb()
            .where(where)
            .getCount();
        return count > 0;
    }
    async createAccount(data) {
        const isEmailInUse = await this.existsAccount({ email: data.email });
        if (isEmailInUse)
            return Promise.reject(AccountCreateEmailInUseError);
        const isUsernameInUse = await this.existsAccount({ username: data.username });
        if (isUsernameInUse)
            return Promise.reject(AccountCreateUsernameInUseError);
        const account = new AccountEntity();
        const authentication = new AuthenticationEntity();
        account.authentication = authentication;
        account.email = data.email;
        account.username = data.username;
        authentication.account = account;
        authentication.password = data.password;
        await this.em.persistAndFlush(account);
        return account;
    }
    async deleteAccount(account) {
        await this.em.removeAndFlush(account);
    }
    async getAccount(id) {
        return await this.findOneOrFail({ id });
    }
    async getAccounts(data) {
        const where = {};
        if (data.ids && data.ids.length > 0)
            where.id = { $in: data.ids };
        if (data.username)
            where.username = { $like: `%${data.username}` };
        return await this.find(where, {
            offset: data.skip,
            limit: data.take, orderBy: { id: 'ASC' }
        });
    }
    async updateAccount(account, data) {
        Object.assign(account, data);
        await this.em.flush();
        return account;
    }
}
