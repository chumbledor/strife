export default class User {
    _account;
    get account() {
        return this._account;
    }
    constructor(account) {
        this._account = account;
    }
    is(id) {
        return this.account != null && this.account.id == id;
    }
}
