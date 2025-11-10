import { type ServiceIdentifier } from 'inversify';
import { type IBaseRouter } from '@interfaces/routers/IBaseRouter.js';

export interface IProjectRouter extends IBaseRouter {}

export const ProjectRouterServiceId: ServiceIdentifier<IProjectRouter> = Symbol.for('ProjectRouterServiceId');