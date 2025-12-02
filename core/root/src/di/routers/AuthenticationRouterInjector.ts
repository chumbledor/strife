import AuthenticationRouter from '@/routers/AuthenticationRouter.js';
import di from '@/DependencyInjection.js';
import { type ServiceIdentifier } from 'inversify';

export const AuthenticationRouterServiceId: ServiceIdentifier<AuthenticationRouter> = Symbol.for('AuthenticationRouterServiceId');
di.bind(AuthenticationRouterServiceId).to(AuthenticationRouter).inSingletonScope();