import di from '@/DependencyInjection';
import ProjectStore from '@/stores/ProjectStore';
import { type ServiceIdentifier } from 'inversify';

export const ProjectStoreServiceId: ServiceIdentifier<ProjectStore> = Symbol.for('ProjectStoreServiceId');
di.bind<ProjectStore>(ProjectStoreServiceId)
  .to(ProjectStore)
  .inSingletonScope();