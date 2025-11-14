import AccountRouter from '../../routers/AccountRouter.js';
import di from '../../DependencyInjection.js';
export const AccountRouterServiceId = Symbol.for('AccountRouterServiceId');
di.bind(AccountRouterServiceId).to(AccountRouter).inSingletonScope();
