import di from '@/DependencyInjection';
import AccountStore from '@/stores/AccountStore';
import { type IAccountStore } from '@interfaces/stores/IAccountStore';
import { type ServiceIdentifier } from 'inversify';

export const AccountStoreServiceId: ServiceIdentifier<IAccountStore> = Symbol.for('AccountStoreServiceId');
di.bind<IAccountStore>(AccountStoreServiceId)
  .to(AccountStore)
  .inSingletonScope();