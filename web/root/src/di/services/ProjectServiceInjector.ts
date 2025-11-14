import di from '@/DependencyInjection';
import ProjectService from '@/services/ProjectService';
import { type IProjectService } from "@interfaces/services/IProjectService";
import { type ServiceIdentifier } from 'inversify';

export const ProjectServiceServiceId: ServiceIdentifier<IProjectService> = Symbol.for('ProjectServiceServiceId');
di.bind<IProjectService>(ProjectServiceServiceId)
  .to(ProjectService)
  .inSingletonScope();