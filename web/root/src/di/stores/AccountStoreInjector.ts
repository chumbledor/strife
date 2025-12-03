import di from '@/DependencyInjection';
import AccountStore from '@/stores/AccountStore';
import { type ServiceIdentifier } from 'inversify';

export const AccountStoreServiceId: ServiceIdentifier<AccountStore> = Symbol.for('AccountStoreServiceId');
di.bind<AccountStore>(AccountStoreServiceId)
  .to(AccountStore)
  .inSingletonScope();