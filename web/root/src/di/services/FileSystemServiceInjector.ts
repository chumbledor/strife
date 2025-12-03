import di from '@/DependencyInjection';
import FileSystemService from '@/services/FileSystemService';
import { type ServiceIdentifier } from 'inversify';

export const FileSystemServiceServiceId: ServiceIdentifier<FileSystemService> = Symbol.for('FileSystemServiceServiceId');
di.bind<FileSystemService>(FileSystemServiceServiceId)
  .to(FileSystemService)
  .inSingletonScope();