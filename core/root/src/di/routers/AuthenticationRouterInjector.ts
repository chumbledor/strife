import AuthenticationRouter from '@/routers/AuthenticationRouter.js';
import di from '@/DependencyInjection.js';
import { type IAuthenticationRouter } from "@interfaces/routers/IAuthenticationRouter.js";
import { type ServiceIdentifier } from 'inversify';

export const AuthenticationRouterServiceId: ServiceIdentifier<IAuthenticationRouter> = Symbol.for('AuthenticationRouterServiceId');
di.bind(AuthenticationRouterServiceId).to(AuthenticationRouter).inSingletonScope();