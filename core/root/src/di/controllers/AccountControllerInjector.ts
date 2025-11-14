import AccountController from '@/controllers/AccountController.js';
import di from '@/DependencyInjection.js';
import { type IAccountController } from "@interfaces/controllers/IAccountController.js";
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const AccountControllerServiceId: ServiceIdentifier<IAccountController> = Symbol.for('AccountControllerServiceId');
di.bind<IAccountController>(AccountControllerServiceId)
  .to(AccountController)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: IAccountController): Promise<IAccountController> {
  await injectable.initialize();
  return injectable;
}