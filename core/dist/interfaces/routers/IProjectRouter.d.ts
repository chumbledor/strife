import { type ServiceIdentifier } from 'inversify';
import { type IBaseRouter } from '../routers/IBaseRouter.js';
export interface IProjectRouter extends IBaseRouter {
}
export declare const ProjectRouterServiceId: ServiceIdentifier<IProjectRouter>;
