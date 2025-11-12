var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import BaseRouter from '../routers/BaseRouter.js';
import { SQLServiceId } from '../../interfaces/ISQL.js';
import { ProjectRouterServiceId } from '../../interfaces/routers/IProjectRouter.js';
import { CreateProjectSchema, GetProjectsSchema, ProjectIdSchema, UpdateProjectSchema } from '@strife/common';
import { injectable } from 'inversify';
let ProjectRouter = class ProjectRouter extends BaseRouter {
    get prefix() {
        return 'projects';
    }
    async routes(instance) {
        super.routes(instance);
        instance.post('/', { onRequest: [instance.authenticate] }, this.createProject.bind(this));
        instance.delete('/:projectId', { onRequest: [instance.authenticate] }, this.deleteProject.bind(this));
        instance.get('/:projectId', this.getProject.bind(this));
        instance.get('/', this.getProjects.bind(this));
        instance.put('/:projectId', { onRequest: [instance.authenticate] }, this.updateProject.bind(this));
    }
    async createProject(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const user = request.user;
        const data = await CreateProjectSchema.parseAsync(request.body);
        return await sql.project.createProject(user.account, data);
    }
    async deleteProject(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const user = request.user;
        const { projectId } = await ProjectIdSchema.parseAsync(request.params);
        await sql.project.deleteProject(user.account, projectId);
    }
    async getProject(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const { projectId } = await ProjectIdSchema.parseAsync(request.params);
        return await sql.project.getProject(projectId);
    }
    async getProjects(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const data = await GetProjectsSchema.parseAsync(request.query);
        return await sql.project.getProjects(data);
    }
    async updateProject(request, reply) {
        const sql = await di.getAsync(SQLServiceId);
        const user = request.user;
        const { projectId } = await ProjectIdSchema.parseAsync(request.params);
        const data = await UpdateProjectSchema.parseAsync(request.body);
        return await sql.project.updateProject(user.account, projectId, data);
    }
};
ProjectRouter = __decorate([
    injectable()
], ProjectRouter);
di.bind(ProjectRouterServiceId).to(ProjectRouter).inSingletonScope();
