import { type FastifyInstance } from 'fastify';
import { type ServiceIdentifier } from 'inversify';

export interface IApp {
  instance: FastifyInstance;
  initialize(): Promise<void>;
  listen(host: string, port: number): Promise<void>;
}

export const AppServiceId: ServiceIdentifier<IApp> = Symbol.for('AppServiceId');