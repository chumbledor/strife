import di from '@/DependencyInjection.js';
import AccountEntity from '@/entities/Account.entity.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import ProjectRepository from '@/repositories/ProjectRepository.js';
import { type IProjectEntity } from '@interfaces/entities/IProject.entity.js';
import { NoSQLServiceId } from '@interfaces/INoSQL.js';
import { type IFileSystemDirectory } from '@interfaces/models/IFileSystemDirectoryModel.js';
import { BeforeCreate, BeforeDelete, Entity, ManyToOne, Property, type EventArgs } from '@mikro-orm/core';
import mongoose from 'mongoose';

const RootDirectoryName = 'root';

@Entity({ repository: () => ProjectRepository })
export default class ProjectEntity extends UniqueEntity implements IProjectEntity {

  @ManyToOne(() => AccountEntity)
  public account!: AccountEntity;
  
  @Property()
  public name!: string;

  @Property()
  public description?: string;

  @Property()
  public fileSystemRootObjectId!: string;
  public async getFileSystemRootDirectory(): Promise<IFileSystemDirectory | null> {
    if (!mongoose.isValidObjectId(this.fileSystemRootObjectId))
      return null;

    const nosql = await di.getAsync(NoSQLServiceId);
    return nosql.fileSystemDirectory.findById(this.fileSystemRootObjectId);
  }

  @BeforeCreate()
  public async createFileSystem(args: EventArgs<IProjectEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    const fileSystemRootObject = new nosql.fileSystemDirectory({ projectId: this.id, name: RootDirectoryName });
    await fileSystemRootObject.save();
    this.fileSystemRootObjectId = fileSystemRootObject._id.toString();
  }

  @BeforeDelete()
  public async deleteFileSystem(args: EventArgs<IProjectEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    await nosql.fileSystemDirectory.deleteOne({ _id: this.fileSystemRootObjectId });
  }

}