import { EntityRepository } from "@mikro-orm/mysql";

export default abstract class BaseRepository<TEntity extends object> extends EntityRepository<TEntity> {}