import { type ServiceIdentifier } from 'inversify';
import { type IBaseRouter } from '@interfaces/routers/IBaseRouter.js';

export interface IAuthenticationRouter extends IBaseRouter {}

export const AuthenticationRouterServiceId: ServiceIdentifier<IAuthenticationRouter> = Symbol.for('AuthenticationRouterServiceId');