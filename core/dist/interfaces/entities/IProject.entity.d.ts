import { type IAccountEntity } from '../entities/IAccount.entity.js';
import { type IBaseEntity } from '../entities/IBase.entity.js';
import { type IUniqueEntity } from '../entities/IUnique.entity.js';
export interface IProjectEntity extends IBaseEntity, IUniqueEntity {
    account: IAccountEntity;
    name: string;
    description?: string;
}
