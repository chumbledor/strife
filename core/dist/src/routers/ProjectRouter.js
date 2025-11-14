var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import BaseRouter from '../routers/BaseRouter.js';
import { ProjectControllerServiceId } from '../di/controllers/ProjectControllerInjector.js';
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
        const user = request.user;
        const createProjectData = await CreateProjectSchema.parseAsync(request.body);
        const projectController = await di.getAsync(ProjectControllerServiceId);
        return await projectController.createProject(user, createProjectData);
    }
    async deleteProject(request, reply) {
        const user = request.user;
        const { projectId } = await ProjectIdSchema.parseAsync(request.params);
        const projectController = await di.getAsync(ProjectControllerServiceId);
        await projectController.deleteProject(user, projectId);
    }
    async getProject(request, reply) {
        const { projectId } = await ProjectIdSchema.parseAsync(request.params);
        const projectController = await di.getAsync(ProjectControllerServiceId);
        return await projectController.getProject(projectId);
    }
    async getProjects(request, reply) {
        const getProjectsData = await GetProjectsSchema.parseAsync(request.query);
        const projectController = await di.getAsync(ProjectControllerServiceId);
        return await projectController.getProjects(getProjectsData);
    }
    async updateProject(request, reply) {
        const user = request.user;
        const { projectId } = await ProjectIdSchema.parseAsync(request.params);
        const updateProjectData = await UpdateProjectSchema.parseAsync(request.body);
        const projectController = await di.getAsync(ProjectControllerServiceId);
        return await projectController.updateProject(user, projectId, updateProjectData);
    }
};
ProjectRouter = __decorate([
    injectable()
], ProjectRouter);
export default ProjectRouter;
