import FileSystemController from '@/controllers/FileSystemController.js';
import di from '@/DependencyInjection.js';
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const FileSystemControllerServiceId: ServiceIdentifier<FileSystemController> = Symbol.for('FileSystemControllerServiceId');
di.bind<FileSystemController>(FileSystemControllerServiceId)
  .to(FileSystemController)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: FileSystemController): Promise<FileSystemController> {
  await injectable.initialize();
  return injectable;
}