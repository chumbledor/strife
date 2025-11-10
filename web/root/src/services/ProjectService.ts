import di from '@/DependencyInjection';
import BaseService from '@/services/BaseService';
import { UserServiceId } from '@interfaces/IUser';
import { ProjectServiceServiceId, type IProjectService } from '@interfaces/services/IProjectService';
import { ProjectSchema, type ProjectData, type CreateProjectData, type GetProjectsData, type UpdateProjectData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
class ProjectService extends BaseService implements IProjectService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/projects`;
  }

  public async createProject(data: CreateProjectData): Promise<ProjectData> {
    return await this.post<ProjectData>({ schema: ProjectSchema, data });
  }

  public async deleteProject(id: string): Promise<void> {
    const user = await di.getAsync(UserServiceId);
    if (!user.account)
      return Promise.reject();

    return this.delete({ url: `/${id}` });
  }

  public getProject(id: string): Promise<ProjectData> {
    return this.get<ProjectData>({ schema: ProjectSchema, url: `/${id}` });
  }

  public getProjects(data: GetProjectsData): Promise<ProjectData[]> {
    return this.get<ProjectData[]>({ schema: ProjectSchema.array(), data });
  }

  public async updateProject(id: string, data: UpdateProjectData): Promise<ProjectData> {
    if (!this.user.account)
      return Promise.reject();

    return this.put<ProjectData>({ schema: ProjectSchema, url: `/${id}`, data });
  }

}

di.bind(ProjectServiceServiceId).to(ProjectService).inSingletonScope();