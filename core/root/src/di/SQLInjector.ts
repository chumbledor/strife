import SQL from '@/SQL.js';
import di from '@/DependencyInjection.js';
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const SQLServiceId: ServiceIdentifier<SQL> = Symbol.for('SQLServiceId');
di.bind<SQL>(SQLServiceId)
  .to(SQL)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: SQL): Promise<SQL> {
  await injectable.initialize();
  return injectable;
}