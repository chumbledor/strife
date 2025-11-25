import di from '@/DependencyInjection';
import QueryClientManager from '@/managers/QueryClientManager';
import { type IQueryClientManager } from "@interfaces/managers/IQueryClientManager";
import { type ServiceIdentifier } from 'inversify';

export const QueryClientManagerServiceId: ServiceIdentifier<IQueryClientManager> = Symbol.for('QueryClientManagerServiceId');
di.bind<IQueryClientManager>(QueryClientManagerServiceId)
  .to(QueryClientManager)
  .inSingletonScope();