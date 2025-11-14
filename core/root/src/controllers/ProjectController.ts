import BaseController from '@/controllers/BaseController.js';
import ProjectEntity from '@/entities/Project.entity.js';
import { ProjectCreateNameInUseError, ProjectDeleteUnauthorizedError, ProjectUpdateUnauthorizedError } from '@/errors/project.js';
import { type IProjectController } from '@interfaces/controllers/IProjectController.js';
import { type IProjectEntity } from '@interfaces/entities/IProject.entity.js';
import { type IUser } from '@interfaces/IUser.js';
import { type FilterQuery, type QBFilterQuery } from '@mikro-orm/core';
import { ProjectSchema, type CreateProjectData, type GetProjectsData, type ProjectData, type UpdateProjectData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export default class ProjectController extends BaseController implements IProjectController {

  async existsProject(where: QBFilterQuery<ProjectData>): Promise<boolean> {
    const count = await this.sql.project.qb()
      .where(where)
      .getCount();
    return count > 0;
  }

  async createProject(user: IUser, createProjectData: CreateProjectData): Promise<ProjectData> {
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

  async deleteProject(user: IUser, projectId: string): Promise<void> {
    const projectEntity = await this.sql.project.findOneOrFail(projectId);
    if (projectEntity.account.id != user.account.id)
      return Promise.reject(ProjectDeleteUnauthorizedError);

    await this.sql.project.getEntityManager().removeAndFlush(projectEntity);
  }

  async getProject(projectId: string): Promise<ProjectData> {
    const projectEntity = await this.sql.project.findOneOrFail(projectId);
    return ProjectSchema.parseAsync(projectEntity);
  }

  async getProjects(getProjectsData: GetProjectsData): Promise<ProjectData[]> {
    const where: FilterQuery<IProjectEntity> = {};
        
    if (getProjectsData.ids && getProjectsData.ids.length > 0)
      where.id = { $in: getProjectsData.ids };

    if (getProjectsData.name)
      where.name = { $like: `%${getProjectsData.name}` };

    const projectEntities = await this.sql.project.find(
      where, 
      { 
        offset: getProjectsData.skip, 
        limit: getProjectsData.take, orderBy: 
        { id: 'ASC' } 
      }
    );

    return ProjectSchema.array().parseAsync(projectEntities);
  }

  async updateProject(user: IUser, projectId: string, updateProjectData: UpdateProjectData): Promise<ProjectData> {
    const projectEntity = await this.sql.project.findOneOrFail(projectId);
    if (projectEntity.account.id != user.account.id)
      return Promise.reject(ProjectUpdateUnauthorizedError);

    Object.assign(projectEntity, updateProjectData);
    await this.sql.project.getEntityManager().flush();
    return ProjectSchema.parseAsync(projectEntity);
  }  

}