import di from '@/DependencyInjection';
import FileSystemStore from '@/stores/FileSystemStore';
import { type IFileSystemStore } from '@interfaces/stores/IFileSystemStore';
import { type ServiceIdentifier } from 'inversify';

export const FileSystemStoreServiceId: ServiceIdentifier<IFileSystemStore> = Symbol.for('FileSystemStoreServiceId');
di.bind<IFileSystemStore>(FileSystemStoreServiceId)
  .to(FileSystemStore)
  .inSingletonScope();