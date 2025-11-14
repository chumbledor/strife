import di from '@/DependencyInjection.js';
import { NoSQLServiceId } from '@/di/NoSQLInjector.js';
import { SQLServiceId } from '@/di/SQLInjector.js';
import { type IBaseController } from '@interfaces/controllers/IBaseController.js';
import { type INoSQL } from '@interfaces/INoSQL.js';
import { type ISQL } from '@interfaces/ISQL.js';

export default abstract class BaseController implements IBaseController {

  private _sql!: ISQL;
  protected get sql(): ISQL {
    return this._sql;
  }

  private _nosql!: INoSQL;
  protected get nosql(): INoSQL {
    return this._nosql;
  }

  public async initialize(): Promise<void> {
    this._sql = await di.getAsync(SQLServiceId);
    this._nosql = await di.getAsync(NoSQLServiceId);
  }

}