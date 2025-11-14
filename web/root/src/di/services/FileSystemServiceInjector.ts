import di from '@/DependencyInjection';
import FileSystemService from '@/services/FileSystemService';
import { type IFileSystemService } from "@interfaces/services/IFileSystemService";
import { type ServiceIdentifier } from 'inversify';

export const FileSystemServiceServiceId: ServiceIdentifier<IFileSystemService> = Symbol.for('FileSystemServiceServiceId');
di.bind<IFileSystemService>(FileSystemServiceServiceId)
  .to(FileSystemService)
  .inSingletonScope();