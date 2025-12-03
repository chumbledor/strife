import di from '@/DependencyInjection';
import AccountService from '@/services/AccountService';
import { type ServiceIdentifier } from 'inversify';

export const AccountServiceServiceId: ServiceIdentifier<AccountService> = Symbol.for('AccountServiceServiceId');
di.bind<AccountService>(AccountServiceServiceId)
  .to(AccountService)
  .inSingletonScope();