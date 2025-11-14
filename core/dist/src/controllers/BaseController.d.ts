import { type IBaseController } from '../../interfaces/controllers/IBaseController.js';
import { type INoSQL } from '../../interfaces/INoSQL.js';
import { type ISQL } from '../../interfaces/ISQL.js';
export default abstract class BaseController implements IBaseController {
    private _sql;
    protected get sql(): ISQL;
    private _nosql;
    protected get nosql(): INoSQL;
    initialize(): Promise<void>;
}
