import BaseService from '@/services/BaseService';
import { type IProjectService } from '@interfaces/services/IProjectService';
import { ProjectSchema, type CreateProjectData, type GetProjectsData, type ProjectData, type UpdateProjectData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class ProjectService extends BaseService implements IProjectService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/projects`;
  }

  public createProject(createProjectData: CreateProjectData): Promise<ProjectData> {
    return this.post<ProjectData>({ schema: ProjectSchema, data: createProjectData });
  }

  public deleteProject(projectId: string): Promise<void> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.delete({ url: `/${projectId}` });
  }

  public getProject(projectId: string): Promise<ProjectData> {
    return this.get<ProjectData>({ schema: ProjectSchema, url: `/${projectId}` });
  }

  public getProjects(getProjectsData: GetProjectsData): Promise<ProjectData[]> {
    return this.get<ProjectData[]>({ schema: ProjectSchema.array(), data: getProjectsData });
  }

  public updateProject(projectId: string, updateProjectData: UpdateProjectData): Promise<ProjectData> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.put<ProjectData>({ schema: ProjectSchema, url: `/${projectId}`, data: updateProjectData });
  }

}

export default ProjectService;