import di from '@/DependencyInjection';
import User from '@/User';
import { type ServiceIdentifier } from 'inversify';

export const UserServiceId: ServiceIdentifier<User> = Symbol.for('UserServiceId');
di.bind<User>(UserServiceId)
  .to(User)
  .inSingletonScope();