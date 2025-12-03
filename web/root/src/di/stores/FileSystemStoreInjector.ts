import di from '@/DependencyInjection';
import FileSystemStore from '@/stores/FileSystemStore';
import { type ServiceIdentifier } from 'inversify';

export const FileSystemStoreServiceId: ServiceIdentifier<FileSystemStore> = Symbol.for('FileSystemStoreServiceId');
di.bind<FileSystemStore>(FileSystemStoreServiceId)
  .to(FileSystemStore)
  .inSingletonScope();