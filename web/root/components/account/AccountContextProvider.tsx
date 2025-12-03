import di from '@/DependencyInjection';
import { AccountStoreServiceId } from '@/di/stores/AccountStoreInjector';
import AccountContext, { type AccountContextValue } from '@components/account/AccountContext';
import React from 'react';

export interface AccountContextProviderProps extends React.PropsWithChildren {
  accountId: string
}

export function AccountContextProvider({ accountId, children }: AccountContextProviderProps): React.JSX.Element {
  const accountStore = di.get(AccountStoreServiceId);
  const { data } = accountStore.useGetAccount(accountId);

  const value: AccountContextValue = {
    accountData: data
  };

  return <AccountContext.Provider value={value}>
    {children}
  </AccountContext.Provider>;
}

export default AccountContextProvider;