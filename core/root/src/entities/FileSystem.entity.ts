import di from '@/DependencyInjection.js';
import { NoSQLServiceId } from '@/di/NoSQLInjector.js';
import UniqueEntity from '@/entities/Unique.entity.js';
import { type FileSystemDirectoryObject } from '@/models/file-system/FileSystemDirectoryObjectModel.js';
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
    const isValidObjectId = mongoose.isValidObjectId(this.rootFileSystemObjectId);
    if (!isValidObjectId)
      return null;

    const nosql = await di.getAsync(NoSQLServiceId);
    return nosql.fileSystemObject.findById(this.rootFileSystemObjectId);
  }

  @BeforeCreate()
  public async createFileSystem(args: EventArgs<FileSystemEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    const rootFileSystemObject = new nosql.fileSystemDirectoryObject({ fileSystemId: this.id, name: RootDirectoryName });
    await rootFileSystemObject.save();
    this.rootFileSystemObjectId = rootFileSystemObject.id.toString();
  }

  @BeforeDelete()
  public async deleteFileSystem(args: EventArgs<FileSystemEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    await nosql.fileSystemDirectoryObject.deleteOne({ _id: this.rootFileSystemObjectId });
  }

}