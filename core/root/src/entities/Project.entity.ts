import di from '@/DependencyInjection.js';
import { NoSQLServiceId } from '@/di/NoSQLInjector.js';
import AccountEntity from '@/entities/Account.entity.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import { type IProjectEntity } from '@interfaces/entities/IProject.entity.js';
import { type IFileSystemDirectory } from '@interfaces/models/IFileSystemDirectoryModel.js';
import { BeforeCreate, BeforeDelete, Entity, ManyToOne, Property, type EventArgs } from '@mikro-orm/core';
import mongoose from 'mongoose';

const RootDirectoryName = 'root';

@Entity()
export default class ProjectEntity extends UniqueEntity implements IProjectEntity {

  @ManyToOne(() => AccountEntity)
  public account!: AccountEntity;
  
  @Property()
  public name!: string;

  @Property()
  public description?: string;

  @Property()
  public rootFileSystemObjectId!: string;
  public async getFileSystemRootDirectory(): Promise<IFileSystemDirectory | null> {
    if (!mongoose.isValidObjectId(this.rootFileSystemObjectId))
      return null;

    const nosql = await di.getAsync(NoSQLServiceId);
    return nosql.fileSystemDirectory.findById(this.rootFileSystemObjectId);
  }

  @BeforeCreate()
  public async createFileSystem(args: EventArgs<IProjectEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    const rootfileSystemObject = new nosql.fileSystemDirectory({ projectId: this.id, name: RootDirectoryName });
    await rootfileSystemObject.save();
    this.rootFileSystemObjectId = rootfileSystemObject.id.toString();
  }

  @BeforeDelete()
  public async deleteFileSystem(args: EventArgs<IProjectEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    await nosql.fileSystemDirectory.deleteOne({ _id: this.rootFileSystemObjectId });
  }

}