import { type IBaseEntity } from '@interfaces/entities/IBase.entity.js';
import { OptionalProps, Property } from '@mikro-orm/core';

export abstract class BaseEntity<Optional = never> implements IBaseEntity {

  [OptionalProps]?: 'createdAt' | 'updatedAt' | Optional;

  @Property()
  public createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();

}

export default BaseEntity;