import { Account } from '@strife/common';
import React from 'react';

export interface AccountContextValue {
  accountData?: Account.Data
}

export const AccountContext = React.createContext<AccountContextValue | undefined>(undefined);

export function useAccountContext(): AccountContextValue {
  const accountContext = React.useContext(AccountContext);
  if (!accountContext)
    throw new Error(`Missing ${typeof AccountContext}`);

  return accountContext;
}

export default AccountContext;