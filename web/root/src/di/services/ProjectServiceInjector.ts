import di from '@/DependencyInjection';
import ProjectService from '@/services/ProjectService';
import { type ServiceIdentifier } from 'inversify';

export const ProjectServiceServiceId: ServiceIdentifier<ProjectService> = Symbol.for('ProjectServiceServiceId');
di.bind<ProjectService>(ProjectServiceServiceId)
  .to(ProjectService)
  .inSingletonScope();