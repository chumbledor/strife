import di from '@/DependencyInjection.js';
import { NoSQLServiceId } from '@/di/NoSQLInjector.js';
import { SQLServiceId } from '@/di/SQLInjector.js';
import NoSQL from '@/NoSQL.js';
import SQL from '@/SQL.js';

export abstract class BaseController {

  private _nosql!: NoSQL;
  protected get nosql(): NoSQL {
    return this._nosql;
  }

  private _sql!: SQL;
  protected get sql(): SQL {
    return this._sql;
  }

  public async initialize(): Promise<void> {
    this._nosql = await di.getAsync(NoSQLServiceId);
    this._sql = await di.getAsync(SQLServiceId);
  }

}

export default BaseController;