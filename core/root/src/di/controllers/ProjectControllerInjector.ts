import ProjectController from '@/controllers/ProjectController.js';
import di from '@/DependencyInjection.js';
import { type IProjectController } from "@interfaces/controllers/IProjectController.js";
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const ProjectControllerServiceId: ServiceIdentifier<IProjectController> = Symbol.for('ProjectControllerServiceId');
di.bind<IProjectController>(ProjectControllerServiceId)
  .to(ProjectController)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: IProjectController): Promise<IProjectController> {
  await injectable.initialize();
  return injectable;
}