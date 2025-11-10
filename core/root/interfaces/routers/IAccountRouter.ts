import { type ServiceIdentifier } from 'inversify';
import { type IBaseRouter } from '@interfaces/routers/IBaseRouter.js';

export interface IAccountRouter extends IBaseRouter {}

export const AccountRouterServiceId: ServiceIdentifier<IAccountRouter> = Symbol.for('AccountRouterServiceId');