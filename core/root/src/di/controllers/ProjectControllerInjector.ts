import ProjectController from '@/controllers/ProjectController.js';
import di from '@/DependencyInjection.js';
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const ProjectControllerServiceId: ServiceIdentifier<ProjectController> = Symbol.for('ProjectControllerServiceId');
di.bind<ProjectController>(ProjectControllerServiceId)
  .to(ProjectController)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: ProjectController): Promise<ProjectController> {
  await injectable.initialize();
  return injectable;
}