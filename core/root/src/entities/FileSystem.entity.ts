import di from '@/DependencyInjection.js';
import { NoSQLServiceId } from '@/di/NoSQLInjector.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import { type IFileSystemEntity } from '@interfaces/entities/IFileSystem.entity.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IFileSystemDirectory } from '@interfaces/models/IFileSystemDirectoryModel.js';
import { BeforeCreate, BeforeDelete, Entity, Property, type EventArgs } from '@mikro-orm/core';
import mongoose from 'mongoose';

const RootDirectoryName = 'root';

@Entity()
export default class FileSystemEntity extends UniqueEntity implements IFileSystemEntity {

  @Property()
  public rootFileSystemObjectId!: string;

  public async hasPermission(user: IUser): Promise<boolean> {
    return true;
  }

  public async getRootFileSystemObject(): Promise<IFileSystemDirectory | null> {
    if (!mongoose.isValidObjectId(this.rootFileSystemObjectId))
      return null;

    const nosql = await di.getAsync(NoSQLServiceId);
    return nosql.fileSystemDirectory.findById(this.rootFileSystemObjectId);
  }

  @BeforeCreate()
  public async createFileSystem(args: EventArgs<IFileSystemEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    const rootfileSystemObject = new nosql.fileSystemDirectory({ fileSystemId: this.id, name: RootDirectoryName });
    await rootfileSystemObject.save();
    console.log(`\n\n${this.id}\n\n`);
    this.rootFileSystemObjectId = rootfileSystemObject.id.toString();
  }

  @BeforeDelete()
  public async deleteFileSystem(args: EventArgs<IFileSystemEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    await nosql.fileSystemDirectory.deleteOne({ _id: this.rootFileSystemObjectId });
  }

}