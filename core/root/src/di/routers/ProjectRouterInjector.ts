import ProjectRouter from '@/routers/ProjectRouter.js';
import di from '@/DependencyInjection.js';
import { type IProjectRouter } from "@interfaces/routers/IProjectRouter.js";
import { type ServiceIdentifier } from 'inversify';

export const ProjectRouterServiceId: ServiceIdentifier<IProjectRouter> = Symbol.for('ProjectRouterServiceId');
di.bind(ProjectRouterServiceId).to(ProjectRouter).inSingletonScope();