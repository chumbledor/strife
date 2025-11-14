import di from '../DependencyInjection.js';
import { NoSQLServiceId } from '../di/NoSQLInjector.js';
import { SQLServiceId } from '../di/SQLInjector.js';
export default class BaseController {
    _sql;
    get sql() {
        return this._sql;
    }
    _nosql;
    get nosql() {
        return this._nosql;
    }
    async initialize() {
        this._sql = await di.getAsync(SQLServiceId);
        this._nosql = await di.getAsync(NoSQLServiceId);
    }
}
