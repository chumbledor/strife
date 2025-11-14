import ProjectRouter from '../../routers/ProjectRouter.js';
import di from '../../DependencyInjection.js';
export const ProjectRouterServiceId = Symbol.for('ProjectRouterServiceId');
di.bind(ProjectRouterServiceId).to(ProjectRouter).inSingletonScope();
