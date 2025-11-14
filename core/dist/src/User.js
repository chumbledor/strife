import { SQLServiceId } from './di/SQLInjector.js';
import di from './DependencyInjection.js';
export default class User {
    static async from(accountId) {
        const user = new User();
        await user.initialize(accountId);
        return user;
    }
    _account;
    get account() {
        return this._account;
    }
    constructor() { }
    is(id) {
        return this.account != null && this.account.id == id;
    }
    async initialize(accountId) {
        const sql = await di.getAsync(SQLServiceId);
        this._account = await sql.account.findOneOrFail({ id: accountId });
    }
}
