import BaseEntity from '@/entities/Base.entity.js';
import { type IUniqueEntity } from '@interfaces/entities/IUnique.entity.js';
import { PrimaryKey } from '@mikro-orm/core';

export abstract class UniqueEntity extends BaseEntity implements IUniqueEntity {
  
    @PrimaryKey({ type: 'uuid' })
    public id: string = crypto.randomUUID();

}

export default UniqueEntity;