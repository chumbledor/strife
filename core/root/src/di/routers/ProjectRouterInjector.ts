import ProjectRouter from '@/routers/ProjectRouter.js';
import di from '@/DependencyInjection.js';
import { type ServiceIdentifier } from 'inversify';

export const ProjectRouterServiceId: ServiceIdentifier<ProjectRouter> = Symbol.for('ProjectRouterServiceId');
di.bind(ProjectRouterServiceId).to(ProjectRouter).inSingletonScope();