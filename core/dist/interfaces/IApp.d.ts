import { type FastifyInstance } from 'fastify';
export interface IApp {
    instance: FastifyInstance;
    initialize(): Promise<void>;
    listen(host: string, port: number): Promise<void>;
}
