import NoSQL from '@/NoSQL.js';
import di from '@/DependencyInjection.js';
import { type INoSQL } from "@interfaces/INoSQL.js";
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const NoSQLServiceId: ServiceIdentifier<INoSQL> = Symbol.for('NoSQLServiceId');
di.bind<INoSQL>(NoSQLServiceId)
  .to(NoSQL)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: INoSQL): Promise<INoSQL> {
  await injectable.initialize();
  return injectable;
}