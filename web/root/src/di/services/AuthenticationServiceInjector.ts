import di from '@/DependencyInjection';
import AuthenticationService from '@/services/AuthenticationService';
import { type ServiceIdentifier } from 'inversify';

export const AuthenticationServiceServiceId: ServiceIdentifier<AuthenticationService> = Symbol.for('AuthenticationServiceServiceId');
di.bind<AuthenticationService>(AuthenticationServiceServiceId)
  .to(AuthenticationService)
  .inSingletonScope();