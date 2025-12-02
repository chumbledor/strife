import di from '@/DependencyInjection.js';
import { NoSQLServiceId } from '@/di/NoSQLInjector.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import { type FileSystemDirectoryObject } from '@root/src/models/file-system/FileSystemDirectoryObjectModel.js';
import User from '@/User.js';
import { BeforeCreate, BeforeDelete, Entity, Property, type EventArgs } from '@mikro-orm/core';
import mongoose from 'mongoose';

const RootDirectoryName = 'root';

@Entity()
export default class FileSystemEntity extends UniqueEntity {

  @Property()
  public rootFileSystemObjectId!: string;

  public async hasPermission(user: User): Promise<boolean> {
    return true;
  }

  public async getRootFileSystemObject(): Promise<FileSystemDirectoryObject | null> {
    if (!mongoose.isValidObjectId(this.rootFileSystemObjectId))
      return null;

    const nosql = await di.getAsync(NoSQLServiceId);
    return nosql.fileSystemDirectory.findById(this.rootFileSystemObjectId);
  }

  @BeforeCreate()
  public async createFileSystem(args: EventArgs<FileSystemEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    const rootfileSystemObject = new nosql.fileSystemDirectory({ fileSystemId: this.id, name: RootDirectoryName });
    await rootfileSystemObject.save();
    console.log(`\n\n${this.id}\n\n`);
    this.rootFileSystemObjectId = rootfileSystemObject.id.toString();
  }

  @BeforeDelete()
  public async deleteFileSystem(args: EventArgs<FileSystemEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    await nosql.fileSystemDirectory.deleteOne({ _id: this.rootFileSystemObjectId });
  }

}