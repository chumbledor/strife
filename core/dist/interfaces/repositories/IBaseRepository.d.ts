import type { AutoPath, ConnectionType, CountOptions, CreateOptions, Cursor, DeleteOptions, EntityData, EntityDictionary, EntityLoaderOptions, EntityManager, FindAllOptions, FindByCursorOptions, FindOneOptions, FindOneOrFailOptions, FindOptions, FromEntityType, GetReferenceOptions, Knex, Loaded, MergeLoaded, MergeOptions, NativeInsertUpdateOptions, PopulatePath, Primary, Ref, RequiredEntityData, UpdateOptions, UpsertManyOptions, UpsertOptions } from '@mikro-orm/mysql';
import { type FilterQuery, QueryBuilder, SqlEntityManager } from '@mikro-orm/mysql';
export interface IBaseRepository<TEntity extends object> extends ISqlEntityRepository<TEntity> {
}
interface ISqlEntityRepository<TEntity extends object> extends IEntityRepository<TEntity> {
    createQueryBuilder<RootAlias extends string = never>(alias?: RootAlias): QueryBuilder<TEntity, RootAlias>;
    qb<RootAlias extends string = never>(alias?: RootAlias): QueryBuilder<TEntity, RootAlias>;
    getKnex(type?: ConnectionType): Knex;
    getEntityManager(): SqlEntityManager;
}
interface IEntityRepository<TEntity extends object> {
    findOne<Hint extends string = never, Fields extends string = '*', Excludes extends string = never>(where: FilterQuery<TEntity>, options?: FindOneOptions<TEntity, Hint, Fields, Excludes>): Promise<Loaded<TEntity, Hint, Fields, Excludes> | null>;
    findOneOrFail<Hint extends string = never, Fields extends string = '*', Excludes extends string = never>(where: FilterQuery<TEntity>, options?: FindOneOrFailOptions<TEntity, Hint, Fields, Excludes>): Promise<Loaded<TEntity, Hint, Fields, Excludes>>;
    upsert<Fields extends string = any>(entityOrData?: EntityData<TEntity> | TEntity, options?: UpsertOptions<TEntity, Fields>): Promise<TEntity>;
    upsertMany<Fields extends string = any>(entitiesOrData?: EntityData<TEntity>[] | TEntity[], options?: UpsertManyOptions<TEntity, Fields>): Promise<TEntity[]>;
    find<Hint extends string = never, Fields extends string = '*', Excludes extends string = never>(where: FilterQuery<TEntity>, options?: FindOptions<TEntity, Hint, Fields, Excludes>): Promise<Loaded<TEntity, Hint, Fields, Excludes>[]>;
    findAndCount<Hint extends string = never, Fields extends string = '*', Excludes extends string = never>(where: FilterQuery<TEntity>, options?: FindOptions<TEntity, Hint, Fields, Excludes>): Promise<[Loaded<TEntity, Hint, Fields, Excludes>[], number]>;
    findByCursor<Hint extends string = never, Fields extends string = '*', Excludes extends string = never, IncludeCount extends boolean = true>(where: FilterQuery<TEntity>, options: FindByCursorOptions<TEntity, Hint, Fields, Excludes, IncludeCount>): Promise<Cursor<TEntity, Hint, Fields, Excludes, IncludeCount>>;
    findAll<Hint extends string = never, Fields extends string = '*', Excludes extends string = never>(options?: FindAllOptions<TEntity, Hint, Fields, Excludes>): Promise<Loaded<TEntity, Hint, Fields, Excludes>[]>;
    insert(data: TEntity | RequiredEntityData<TEntity>, options?: NativeInsertUpdateOptions<TEntity>): Promise<Primary<TEntity>>;
    insertMany(data: TEntity[] | RequiredEntityData<TEntity>[], options?: NativeInsertUpdateOptions<TEntity>): Promise<Primary<TEntity>[]>;
    nativeUpdate(where: FilterQuery<TEntity>, data: EntityData<TEntity>, options?: UpdateOptions<TEntity>): Promise<number>;
    nativeDelete(where: FilterQuery<TEntity>, options?: DeleteOptions<TEntity>): Promise<number>;
    map(result: EntityDictionary<TEntity>, options?: {
        schema?: string;
    }): TEntity;
    getReference(id: Primary<TEntity>, options: Omit<GetReferenceOptions, 'wrapped'> & {
        wrapped: true;
    }): Ref<TEntity>;
    getReference(id: Primary<TEntity> | Primary<TEntity>[]): TEntity;
    getReference(id: Primary<TEntity>, options: Omit<GetReferenceOptions, 'wrapped'> & {
        wrapped: false;
    }): TEntity;
    canPopulate(property: string): boolean;
    populate<Ent extends TEntity | TEntity[], Hint extends string = never, Naked extends FromEntityType<TEntity> = FromEntityType<TEntity>, Fields extends string = '*', Excludes extends string = never>(entities: Ent, populate: AutoPath<Naked, Hint, PopulatePath.ALL>[] | false, options?: EntityLoaderOptions<Naked, Fields, Excludes>): Promise<Ent extends object[] ? MergeLoaded<ArrayElement<Ent>, Naked, Hint, Fields, Excludes>[] : MergeLoaded<Ent, Naked, Hint, Fields, Excludes>>;
    create<Convert extends boolean = false>(data: RequiredEntityData<TEntity, never, Convert>, options?: CreateOptions<Convert>): TEntity;
    create<Convert extends boolean = false>(data: EntityData<TEntity, Convert>, options: CreateOptions<Convert> & {
        partial: true;
    }): TEntity;
    merge(data: TEntity | EntityData<TEntity>, options?: MergeOptions): TEntity;
    count<Hint extends string = never>(where?: FilterQuery<TEntity>, options?: CountOptions<TEntity, Hint>): Promise<number>;
    getEntityName(): string;
    getEntityManager(): EntityManager;
}
export type ArrayElement<ArrayType extends unknown[]> = ArrayType extends (infer ElementType)[] ? ElementType : never;
export {};
