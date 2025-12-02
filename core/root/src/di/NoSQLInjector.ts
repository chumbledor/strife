import NoSQL from '@/NoSQL.js';
import di from '@/DependencyInjection.js';
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const NoSQLServiceId: ServiceIdentifier<NoSQL> = Symbol.for('NoSQLServiceId');
di.bind<NoSQL>(NoSQLServiceId)
  .to(NoSQL)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: NoSQL): Promise<NoSQL> {
  await injectable.initialize();
  return injectable;
}