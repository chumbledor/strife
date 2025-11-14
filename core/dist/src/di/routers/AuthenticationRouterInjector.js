import AuthenticationRouter from '../../routers/AuthenticationRouter.js';
import di from '../../DependencyInjection.js';
export const AuthenticationRouterServiceId = Symbol.for('AuthenticationRouterServiceId');
di.bind(AuthenticationRouterServiceId).to(AuthenticationRouter).inSingletonScope();
