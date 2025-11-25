import di from '@/DependencyInjection';
import { UserServiceId } from '@/di/UserInjector';
import UserContext, { type IUserContext } from '@components/user/UserContext';
import React from 'react';

export interface UserContextProviderProps extends React.PropsWithChildren {}

export function UserContextProvider({ children }: UserContextProviderProps): React.JSX.Element {
  const user = di.get(UserServiceId);

  const value: IUserContext = {
    user
  };

  return <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>;
}

export default UserContextProvider;