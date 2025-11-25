import { type AccountData } from '@strife/common';
import React from 'react';

export interface IAccountContext {
  accountData?: AccountData
}

export const AccountContext = React.createContext<IAccountContext | undefined>(undefined);

export function useAccountContext(): IAccountContext {
  const accountContext = React.useContext(AccountContext);
  if (!accountContext)
    throw new Error(`Missing ${typeof AccountContext}`);

  return accountContext;
}

export default AccountContext;