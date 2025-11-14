import di from '@/DependencyInjection';
import UserService from '@/User';
import { type IUser } from "@interfaces/IUser";
import { type ServiceIdentifier } from 'inversify';

export const UserServiceId: ServiceIdentifier<IUser> = Symbol.for('UserServiceId');
di.bind<IUser>(UserServiceId)
  .to(UserService)
  .inSingletonScope();