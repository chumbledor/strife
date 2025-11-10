import { type ServiceIdentifier } from 'inversify';
import { type IBaseRouter } from '../routers/IBaseRouter.js';
export interface IAccountRouter extends IBaseRouter {
}
export declare const AccountRouterServiceId: ServiceIdentifier<IAccountRouter>;
