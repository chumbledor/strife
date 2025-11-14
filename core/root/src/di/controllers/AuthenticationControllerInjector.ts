import AuthenticationController from '@/controllers/AuthenticationController.js';
import di from '@/DependencyInjection.js';
import { type IAuthenticationController } from "@interfaces/controllers/IAuthenticationController.js";
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const AuthenticationControllerServiceId: ServiceIdentifier<IAuthenticationController> = Symbol.for('AuthenticationControllerServiceId');
di.bind<IAuthenticationController>(AuthenticationControllerServiceId)
  .to(AuthenticationController)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: IAuthenticationController): Promise<IAuthenticationController> {
  await injectable.initialize();
  return injectable;
}