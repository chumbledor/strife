import AccountRouter from '@/routers/AccountRouter.js';
import di from '@/DependencyInjection.js';
import { type ServiceIdentifier } from 'inversify';

export const AccountRouterServiceId: ServiceIdentifier<AccountRouter> = Symbol.for('AccountRouterServiceId');
di.bind(AccountRouterServiceId).to(AccountRouter).inSingletonScope();