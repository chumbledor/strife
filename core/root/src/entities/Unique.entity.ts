import BaseEntity from '@/entities/Base.entity.js';
import { PrimaryKey } from '@mikro-orm/core';

export default abstract class UniqueEntity extends BaseEntity {
  
    @PrimaryKey({ type: 'uuid' })
    public id: string = crypto.randomUUID();

}