import AccountEntity from '@/entities/Account.entity.js';
import FileSystemEntity from '@/entities/FileSystem.entity.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import { type IProjectEntity } from '@interfaces/entities/IProject.entity.js';
import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';

@Entity()
export default class ProjectEntity extends UniqueEntity implements IProjectEntity {

  @ManyToOne(() => AccountEntity)
  public account!: AccountEntity;
  
  @OneToOne(() => FileSystemEntity, { eager: true })
  public fileSystem!: FileSystemEntity;

  @Property()
  public name!: string;

  @Property()
  public description?: string;
  
}