import { type IUser } from '@interfaces/IUser';
import React from 'react';

export interface IUserContext {
  user?: IUser
}

export const UserContext = React.createContext<IUserContext | undefined>(undefined);

export function useUserContext(): IUserContext {
  const userContext = React.useContext(UserContext);
  if (!userContext)
    throw new Error(`Missing ${typeof UserContext}`);

  return userContext;
}

export default UserContext;