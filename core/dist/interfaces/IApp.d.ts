import { type FastifyInstance } from 'fastify';
import { type ServiceIdentifier } from 'inversify';
export interface IApp {
    instance: FastifyInstance;
    initialize(): Promise<void>;
    listen(host: string, port: number): Promise<void>;
}
export declare const AppServiceId: ServiceIdentifier<IApp>;
