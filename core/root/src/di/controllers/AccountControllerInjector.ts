import AccountController from '@/controllers/AccountController.js';
import di from '@/DependencyInjection.js';
import { type ResolutionContext, type ServiceIdentifier } from 'inversify';

export const AccountControllerServiceId: ServiceIdentifier<AccountController> = Symbol.for('AccountControllerServiceId');
di.bind<AccountController>(AccountControllerServiceId)
  .to(AccountController)
  .inSingletonScope()
  .onActivation(onActivation);

async function onActivation(_context: ResolutionContext, injectable: AccountController): Promise<AccountController> {
  await injectable.initialize();
  return injectable;
}