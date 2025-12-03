import di from '@/DependencyInjection';
import QueryClientManager from '@/managers/QueryClientManager';
import { type ServiceIdentifier } from 'inversify';

export const QueryClientManagerServiceId: ServiceIdentifier<QueryClientManager> = Symbol.for('QueryClientManagerServiceId');
di.bind<QueryClientManager>(QueryClientManagerServiceId)
  .to(QueryClientManager)
  .inSingletonScope();