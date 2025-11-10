import AccountEntity from '@/entities/Account.entity.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import ProjectRepository from '@/repositories/ProjectRepository.js';
import { IProjectEntity } from '@interfaces/entities/IProject.entity.js';
import { Entity, ManyToOne, Property } from '@mikro-orm/core';

@Entity({ repository: () => ProjectRepository })
export default class ProjectEntity extends UniqueEntity implements IProjectEntity {

  @ManyToOne(() => AccountEntity)
  public account!: AccountEntity;
  
  @Property()
  public name!: string;

  @Property()
  public description?: string;

}