import { type IApp } from '../interfaces/IApp.js';
import { FastifyInstance } from 'fastify';
declare module 'fastify' {
    interface FastifyInstance {
        authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
}
export default class App implements IApp {
    private _instance;
    get instance(): FastifyInstance;
    initialize(): Promise<void>;
    listen(host: string, port: number): Promise<void>;
    private authenticate;
}
