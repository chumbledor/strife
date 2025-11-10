var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import BaseRouter from '../routers/BaseRouter.js';
import { DatabaseServiceId } from '../../interfaces/IDatabase.js';
import { ProjectRouterServiceId } from '../../interfaces/routers/IProjectRouter.js';
import { CreateProjectSchema, GetProjectsSchema, IdSchema, UpdateProjectSchema } from '@strife/common';
import { injectable } from 'inversify';
let ProjectRouter = class ProjectRouter extends BaseRouter {
    get prefix() {
        return 'projects';
    }
    async routes(instance) {
        super.routes(instance);
        instance.post('/', { onRequest: [instance.authenticate] }, this.createProject.bind(this));
        instance.delete('/:id', { onRequest: [instance.authenticate] }, this.deleteProject.bind(this));
        instance.get('/:id', this.getProject.bind(this));
        instance.get('/', this.getProjects.bind(this));
        instance.put('/:id', { onRequest: [instance.authenticate] }, this.updateProject.bind(this));
    }
    async createProject(request, reply) {
        const database = await di.getAsync(DatabaseServiceId);
        const user = request.user;
        const data = await CreateProjectSchema.parseAsync(request.body);
        return await database.project.createProject(user.account, data);
    }
    async deleteProject(request, reply) {
        const database = await di.getAsync(DatabaseServiceId);
        const user = request.user;
        const { id } = await IdSchema.parseAsync(request.body);
        await database.project.deleteProject(user.account, id);
    }
    async getProject(request, reply) {
        const database = await di.getAsync(DatabaseServiceId);
        const { id } = await IdSchema.parseAsync(request.params);
        return await database.project.getProject(id);
    }
    async getProjects(request, reply) {
        const database = await di.getAsync(DatabaseServiceId);
        const data = await GetProjectsSchema.parseAsync(request.query);
        return await database.project.getProjects(data);
    }
    async updateProject(request, reply) {
        const database = await di.getAsync(DatabaseServiceId);
        const user = request.user;
        const { id } = await IdSchema.parseAsync(request.params);
        const data = await UpdateProjectSchema.parseAsync(request.body);
        return await database.project.updateProject(user.account, id, data);
    }
};
ProjectRouter = __decorate([
    injectable()
], ProjectRouter);
di.bind(ProjectRouterServiceId).to(ProjectRouter).inSingletonScope();
