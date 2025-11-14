import SQL from '@/SQL.js';
import di from '@/DependencyInjection.js';
import { type ISQL } from "@interfaces/ISQL.js";
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const SQLServiceId: ServiceIdentifier<ISQL> = Symbol.for('SQLServiceId');
di.bind<ISQL>(SQLServiceId)
  .to(SQL)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: ISQL): Promise<ISQL> {
  await injectable.initialize();
  return injectable;
}