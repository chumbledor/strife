import di from '@/DependencyInjection.js';
import User from '@/User.js';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { AppServiceId, type IApp } from '@interfaces/IApp.js';
import { SQLServiceId } from '@interfaces/ISQL.js';
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

@injectable()
class App implements IApp {

  private _instance!: FastifyInstance;
  public get instance(): FastifyInstance {
    return this._instance;
  }

  public async initialize(): Promise<void> {
    this._instance = fastify({ logger: true });

    await this.instance.register(
      cors,
      { 
        origin: process.env.CORS_ORIGIN,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
      }
    );

    const cookieSecret = process.env.COOKIE_SECRET ?? 'secret';
    await this.instance.register(
      cookie, 
      { secret: cookieSecret }
    );

    const jwtSecret = process.env.JWT_SECRET ?? 'secret';
    await this.instance.register(
      jwt, 
      { secret: jwtSecret }
    );

    this.instance.decorate(
      'authenticate',
      this.authenticate.bind(this)
    );
  }

  public async listen(host: string, port: number): Promise<void> {
    try {
      await this.instance.listen({ host, port });
    } catch (error: any) {
      this.instance.log.error(error);
      process.exit(1);
    }
  }

  private async authenticate(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { id } = await request.jwtVerify<{ id: string }>();
      const sql = await di.getAsync(SQLServiceId);
      const account = await sql.account.getAccount(id);
      const user = new User(account);
      request.user = user;
    } catch (error: any) {
      reply.send(error);
    }
  }

}

di.bind(AppServiceId).to(App).inSingletonScope();