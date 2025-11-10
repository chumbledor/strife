var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from './DependencyInjection.js';
import User from './User.js';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { AppServiceId } from '../interfaces/IApp.js';
import { DatabaseServiceId } from '../interfaces/IDatabase.js';
import fastify from 'fastify';
import { injectable } from 'inversify';
let App = class App {
    _instance;
    get instance() {
        return this._instance;
    }
    async initialize() {
        this._instance = fastify({ logger: true });
        await this.instance.register(cors, {
            origin: process.env.CORS_ORIGIN,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true
        });
        const cookieSecret = process.env.COOKIE_SECRET ?? 'secret';
        await this.instance.register(cookie, { secret: cookieSecret });
        const jwtSecret = process.env.JWT_SECRET ?? 'secret';
        await this.instance.register(jwt, { secret: jwtSecret });
        this.instance.decorate('authenticate', this.authenticate.bind(this));
    }
    async listen(host, port) {
        try {
            await this.instance.listen({ host, port });
        }
        catch (error) {
            this.instance.log.error(error);
            process.exit(1);
        }
    }
    async authenticate(request, reply) {
        try {
            const { id } = await request.jwtVerify();
            const database = await di.getAsync(DatabaseServiceId);
            const account = await database.account.getAccount(id);
            const user = new User(account);
            request.user = user;
        }
        catch (error) {
            reply.send(error);
        }
    }
};
App = __decorate([
    injectable()
], App);
di.bind(AppServiceId).to(App).inSingletonScope();
