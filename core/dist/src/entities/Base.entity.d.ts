import { type IBaseEntity } from '../../interfaces/entities/IBase.entity.js';
import { OptionalProps } from '@mikro-orm/core';
export default abstract class BaseEntity<Optional = never> implements IBaseEntity {
    [OptionalProps]?: 'createdAt' | 'updatedAt' | Optional;
    createdAt: Date;
    updatedAt: Date;
}
