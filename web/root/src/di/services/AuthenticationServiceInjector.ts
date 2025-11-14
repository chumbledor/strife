import di from '@/DependencyInjection';
import AuthenticationService from '@/services/AuthenticationService';
import { type IAuthenticationService } from "@interfaces/services/IAuthenticationService";
import { type ServiceIdentifier } from 'inversify';

export const AuthenticationServiceServiceId: ServiceIdentifier<IAuthenticationService> = Symbol.for('AuthenticationServiceServiceId');
di.bind<IAuthenticationService>(AuthenticationServiceServiceId)
  .to(AuthenticationService)
  .inSingletonScope();