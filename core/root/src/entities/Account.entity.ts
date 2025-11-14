import AuthenticationEntity from '@/entities/Authentication.entity.js';
import ProjectEntity from '@/entities/Project.entity.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { Cascade, Collection, Entity, OneToMany, OneToOne, Property } from '@mikro-orm/core';

@Entity()
export default class AccountEntity extends UniqueEntity implements IAccountEntity {

  @OneToOne(() => AuthenticationEntity, authentication => authentication.account, { cascade: [Cascade.ALL] })
  public authentication!: AuthenticationEntity;

  @OneToMany(() => ProjectEntity, project => project.account, { cascade: [Cascade.ALL] })
  public projects = new Collection<ProjectEntity>(this);
  
  @Property({ hidden: true, unique: true })
  public email!: string;

  @Property({ unique: true })
  public username!: string;

}