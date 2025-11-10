import { type ServiceIdentifier } from 'inversify';
import { type IBaseRouter } from '../routers/IBaseRouter.js';
export interface IAuthenticationRouter extends IBaseRouter {
}
export declare const AuthenticationRouterServiceId: ServiceIdentifier<IAuthenticationRouter>;
