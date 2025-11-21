import AccountEntity from '@/entities/Account.entity.js';
import FileSystemEntity from '@root/src/entities/FileSystem.entity.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import { type IFileSystemEntity } from '@interfaces/entities/IFileSystem.entity.js';
import { type IProjectEntity } from '@interfaces/entities/IProject.entity.js';
import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';

@Entity()
export class ProjectEntity extends UniqueEntity implements IProjectEntity {

  @ManyToOne(() => AccountEntity)
  public account!: AccountEntity;

  @OneToOne(() => FileSystemEntity)
  public fileSystem!: IFileSystemEntity;
  
  @Property()
  public name!: string;

  @Property()
  public description?: string;

}

export default ProjectEntity;