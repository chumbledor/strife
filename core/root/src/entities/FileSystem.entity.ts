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
export class FileSystemEntity extends UniqueEntity implements IFileSystemEntity {

  @Property()
  public rootFileSystemObjectId!: string;

  // TODO: Implement this.
  public async hasPermission(user: IUser): Promise<boolean> {
    return true;
  }

  // TODO: Figure out if I can make this automatically happen as part of entity initialization.
  public async getRootFileSystemObject(): Promise<IFileSystemDirectory | undefined> {
    if (!mongoose.isValidObjectId(this.rootFileSystemObjectId))
      return undefined;

    const nosql = await di.getAsync(NoSQLServiceId);
    const rootFileSystemObject = await nosql.fileSystemDirectory.findById(this.rootFileSystemObjectId);
    return rootFileSystemObject != null
      ? rootFileSystemObject
      : undefined;
  }

  @BeforeCreate()
  public async createFileSystem(args: EventArgs<IFileSystemEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    const rootfileSystemObject = new nosql.fileSystemDirectory({ FileSystemId: this.id, name: RootDirectoryName });
    await rootfileSystemObject.save();
    this.rootFileSystemObjectId = rootfileSystemObject.id.toString();
  }

  @BeforeDelete()
  public async deleteFileSystem(args: EventArgs<IFileSystemEntity>): Promise<void> {
    const nosql = await di.getAsync(NoSQLServiceId);
    await nosql.fileSystemDirectory.deleteOne({ _id: this.rootFileSystemObjectId });
  }

}

export default FileSystemEntity;