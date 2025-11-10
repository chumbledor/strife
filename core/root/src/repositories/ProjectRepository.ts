import ProjectEntity from '@/entities/Project.entity.js';
import { ProjectCreateNameInUseError, ProjectDeleteUnauthorizedError, ProjectUpdateUnauthorizedError } from '@/errors/project.js';
import BaseRepository from '@/repositories/BaseRepository.js';
import { type IAccountEntity } from '@interfaces/entities/IAccount.entity.js';
import { type IProjectEntity } from '@interfaces/entities/IProject.entity.js';
import { type IProjectRepository } from '@interfaces/repositories/IProjectRepository.js';
import { type FilterQuery, type QBFilterQuery } from '@mikro-orm/core';
import { type CreateProjectData, type GetProjectsData, type UpdateProjectData } from '@strife/common';

export default class ProjectRepository extends BaseRepository<ProjectEntity> implements IProjectRepository {

  async existsProject(where: QBFilterQuery<IAccountEntity>): Promise<boolean> {
    const count = await this.qb()
      .where(where)
      .getCount();
    return count > 0;
  }

  async createProject(account: IAccountEntity, data: CreateProjectData): Promise<IProjectEntity> {
    const isNameInUse = await this.existsProject({ account, name: data.name });
    if (isNameInUse)
      return Promise.reject(ProjectCreateNameInUseError);

    const project = new ProjectEntity();
    project.account = account;
    project.name = data.name;
    project.description = data.description;

    await this.em.persistAndFlush(project);

    return project;
  }

  async deleteProject(account: IAccountEntity, id: string): Promise<void> {
    const project = await this.getProject(id);
    if (project.account.id != account.id)
      return Promise.reject(ProjectDeleteUnauthorizedError);

    await this.em.removeAndFlush(project);
  }

  async getProject(id: string): Promise<IProjectEntity> {
    return await this.findOneOrFail({ id });
  }

  async getProjects(data: GetProjectsData): Promise<IProjectEntity[]> {
    const where: FilterQuery<IProjectEntity> = {};
        
    if (data.ids && data.ids.length > 0)
      where.id = { $in: data.ids };

    if (data.name)
      where.name = { $like: `%${data.name}` };

    return await this.find(
      where, 
      { 
        offset: data.skip, 
        limit: data.take, orderBy: 
        { id: 'ASC' } 
      }
    );
  }

  async updateProject(account: IAccountEntity, id: string, data: UpdateProjectData): Promise<IProjectEntity> {
    const project = await this.getProject(id);
    if (project.account.id != account.id)
      return Promise.reject(ProjectUpdateUnauthorizedError);

    Object.assign(project, data);
    await this.em.flush();
    return project;
  }  

}