import AccountRouter from '@/routers/AccountRouter.js';
import di from '@/DependencyInjection.js';
import { type IAccountRouter } from "@interfaces/routers/IAccountRouter.js";
import { type ServiceIdentifier } from 'inversify';

export const AccountRouterServiceId: ServiceIdentifier<IAccountRouter> = Symbol.for('AccountRouterServiceId');
di.bind(AccountRouterServiceId).to(AccountRouter).inSingletonScope();