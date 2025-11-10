import BaseEntity from '../entities/Base.entity.js';
import { IUniqueEntity } from '../../interfaces/entities/IUnique.entity.js';
export default abstract class UniqueEntity extends BaseEntity implements IUniqueEntity {
    id: string;
}
