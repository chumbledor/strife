import di from '@/DependencyInjection';
import ProjectStore from '@/stores/ProjectStore';
import { type IProjectStore } from '@interfaces/stores/IProjectStore';
import { type ServiceIdentifier } from 'inversify';

export const ProjectStoreServiceId: ServiceIdentifier<IProjectStore> = Symbol.for('ProjectStoreServiceId');
di.bind<IProjectStore>(ProjectStoreServiceId)
  .to(ProjectStore)
  .inSingletonScope();