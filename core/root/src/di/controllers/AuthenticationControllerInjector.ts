import AuthenticationController from '@/controllers/AuthenticationController.js';
import di from '@/DependencyInjection.js';
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const AuthenticationControllerServiceId: ServiceIdentifier<AuthenticationController> = Symbol.for('AuthenticationControllerServiceId');
di.bind<AuthenticationController>(AuthenticationControllerServiceId)
  .to(AuthenticationController)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: AuthenticationController): Promise<AuthenticationController> {
  await injectable.initialize();
  return injectable;
}