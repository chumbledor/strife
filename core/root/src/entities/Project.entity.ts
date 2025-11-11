import di from '@/DependencyInjection.js';
import AccountEntity from '@/entities/Account.entity.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import ProjectRepository from '@/repositories/ProjectRepository.js';
import { IProjectEntity } from '@interfaces/entities/IProject.entity.js';
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
  public fileSystemRootDirectoryId!: string;
  public async getFileSystemRootDirectory(): Promise<IFileSystemDirectory | null> {
    if (!mongoose.isValidObjectId(this.fileSystemRootDirectoryId))
      return null;

    const nosql = await di.getAsync(NoSQLServiceId);
    return nosql.fileSystemDirectory.findById(this.fileSystemRootDirectoryId);
  }

  @BeforeCreate()
  public async createFileSystem(args: EventArgs<IProjectEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    const fileSystemRootDirectory = new nosql.fileSystemDirectory({ name: RootDirectoryName });
    await fileSystemRootDirectory.save();
    console.log(`CREATED FILE SYSTEM ROOT: ${fileSystemRootDirectory._id}`);
    this.fileSystemRootDirectoryId = fileSystemRootDirectory._id.toString();
  }

  @BeforeDelete()
  public async deleteFileSystem(args: EventArgs<IProjectEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    await nosql.fileSystemDirectory.deleteOne({ _id: this.fileSystemRootDirectoryId });
  }

}