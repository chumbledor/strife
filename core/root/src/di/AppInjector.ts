import App from '@/App.js';
import di from '@/DependencyInjection.js';
import { type IApp } from "@interfaces/IApp.js";
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const AppServiceId: ServiceIdentifier<IApp> = Symbol.for('AppServiceId');
di.bind<IApp>(AppServiceId)
  .to(App)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: IApp): Promise<IApp> {
  await injectable.initialize();
  return injectable;
}