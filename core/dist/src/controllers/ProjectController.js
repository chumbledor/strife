var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseController from '../controllers/BaseController.js';
import ProjectEntity from '../entities/Project.entity.js';
import { ProjectCreateNameInUseError, ProjectDeleteUnauthorizedError, ProjectUpdateUnauthorizedError } from '../errors/project.js';
import { ProjectSchema } from '@strife/common';
import { injectable } from 'inversify';
let ProjectController = class ProjectController extends BaseController {
    async existsProject(where) {
        const count = await this.sql.project.qb()
            .where(where)
            .getCount();
        return count > 0;
    }
    async createProject(user, createProjectData) {
        const isNameInUse = await this.existsProject({ account: user.account, name: createProjectData.name });
        if (isNameInUse)
            return Promise.reject(ProjectCreateNameInUseError);
        const projectEntity = new ProjectEntity();
        projectEntity.account = user.account;
        projectEntity.name = createProjectData.name;
        projectEntity.description = createProjectData.description;
        await this.sql.project.getEntityManager().persistAndFlush(projectEntity);
        return ProjectSchema.parseAsync(projectEntity);
    }
    async deleteProject(user, projectId) {
        const projectEntity = await this.sql.project.findOneOrFail(projectId);
        if (projectEntity.account.id != user.account.id)
            return Promise.reject(ProjectDeleteUnauthorizedError);
        await this.sql.project.getEntityManager().removeAndFlush(projectEntity);
    }
    async getProject(projectId) {
        const projectEntity = await this.sql.project.findOneOrFail(projectId);
        return ProjectSchema.parseAsync(projectEntity);
    }
    async getProjects(getProjectsData) {
        const where = {};
        if (getProjectsData.ids && getProjectsData.ids.length > 0)
            where.id = { $in: getProjectsData.ids };
        if (getProjectsData.name)
            where.name = { $like: `%${getProjectsData.name}` };
        const projectEntities = await this.sql.project.find(where, {
            offset: getProjectsData.skip,
            limit: getProjectsData.take, orderBy: { id: 'ASC' }
        });
        return ProjectSchema.array().parseAsync(projectEntities);
    }
    async updateProject(user, projectId, updateProjectData) {
        const projectEntity = await this.sql.project.findOneOrFail(projectId);
        if (projectEntity.account.id != user.account.id)
            return Promise.reject(ProjectUpdateUnauthorizedError);
        Object.assign(projectEntity, updateProjectData);
        await this.sql.project.getEntityManager().flush();
        return ProjectSchema.parseAsync(projectEntity);
    }
};
ProjectController = __decorate([
    injectable()
], ProjectController);
export default ProjectController;
