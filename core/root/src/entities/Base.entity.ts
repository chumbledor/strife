import { OptionalProps, Property } from '@mikro-orm/core';

export default abstract class BaseEntity<Optional = never> {

  [OptionalProps]?: 'createdAt' | 'updatedAt' | Optional;

  @Property()
  public createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();

}