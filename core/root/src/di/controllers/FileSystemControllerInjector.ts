import FileSystemController from '@/controllers/FileSystemController.js';
import di from '@/DependencyInjection.js';
import { type IFileSystemController } from "@interfaces/controllers/IFileSystemController.js";
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const FileSystemControllerServiceId: ServiceIdentifier<IFileSystemController> = Symbol.for('FileSystemControllerServiceId');
di.bind<IFileSystemController>(FileSystemControllerServiceId)
  .to(FileSystemController)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: IFileSystemController): Promise<IFileSystemController> {
  await injectable.initialize();
  return injectable;
}