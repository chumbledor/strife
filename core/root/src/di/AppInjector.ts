import App from '@/App.js';
import di from '@/DependencyInjection.js';
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const AppServiceId: ServiceIdentifier<App> = Symbol.for('AppServiceId');
di.bind<App>(AppServiceId)
  .to(App)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: App): Promise<App> {
  await injectable.initialize();
  return injectable;
}