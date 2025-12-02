import BaseController from '@/controllers/BaseController.js';
import FileSystemEntity from '@/entities/FileSystem.entity.js';
import ProjectEntity from '@/entities/Project.entity.js';
import { ProjectCreateNameInUseError, ProjectDeleteUnauthorizedError, ProjectUpdateUnauthorizedError } from '@/errors/project.js';
import User from '@/User.js';
import { type FilterQuery, type QBFilterQuery } from '@mikro-orm/core';
import { Project } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class ProjectController extends BaseController {

  async existsProject(where: QBFilterQuery<Project.Data>): Promise<boolean> {
    const count = await this.sql.project.qb()
      .where(where)
      .getCount();
    return count > 0;
  }

  async createProject(user: User, createData: Project.CreateData): Promise<Project.Data> {
    const isNameInUse = await this.existsProject({ account: user.account, name: createData.name });
    if (isNameInUse)
      return Promise.reject(ProjectCreateNameInUseError);

    const projectEntity = new ProjectEntity();
    const fileSystemEntity = new FileSystemEntity();

    projectEntity.account = user.account;
    projectEntity.fileSystem = fileSystemEntity;
    projectEntity.name = createData.name;
    projectEntity.description = createData.description;

    await this.sql.project.getEntityManager().persistAndFlush(projectEntity);
    return Project.Schema.parseAsync(projectEntity);
  }

  async deleteProject(user: User, projectId: string): Promise<void> {
    const projectEntity = await this.sql.project.findOneOrFail(projectId);
    if (projectEntity.account.id != user.account.id)
      return Promise.reject(ProjectDeleteUnauthorizedError);

    await this.sql.project.getEntityManager().removeAndFlush(projectEntity);
  }

  async getProject(projectId: string): Promise<Project.Data> {
    const projectEntity = await this.sql.project.findOneOrFail(projectId);
    return Project.Schema.parseAsync(projectEntity);
  }

  async getProjects(getData: Project.GetData): Promise<Project.Data[]> {
    const where: FilterQuery<ProjectEntity> = {};
        
    if (getData.ids && getData.ids.length > 0)
      where.id = { $in: getData.ids };

    if (getData.name)
      where.name = { $like: `%${getData.name}` };

    const projectEntities = await this.sql.project.find(
      where, 
      { 
        offset: getData.skip, 
        limit: getData.take, orderBy: 
        { id: 'ASC' } 
      }
    );

    return Project.Schema.array().parseAsync(projectEntities);
  }

  async updateProject(user: User, projectId: string, updateData: Project.UpdateData): Promise<Project.Data> {
    const projectEntity = await this.sql.project.findOneOrFail(projectId);
    if (projectEntity.account.id != user.account.id)
      return Promise.reject(ProjectUpdateUnauthorizedError);

    Object.assign(projectEntity, updateData);
    await this.sql.project.getEntityManager().flush();
    return Project.Schema.parseAsync(projectEntity);
  }  

}

export default ProjectController;