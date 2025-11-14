import di from '@/DependencyInjection';
import AccountService from '@/services/AccountService';
import { type IAccountService } from "@interfaces/services/IAccountService";
import { type ServiceIdentifier } from 'inversify';

export const AccountServiceServiceId: ServiceIdentifier<IAccountService> = Symbol.for('AccountServiceServiceId');
di.bind<IAccountService>(AccountServiceServiceId)
  .to(AccountService)
  .inSingletonScope();