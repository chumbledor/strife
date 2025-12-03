import BaseService from '@/services/BaseService';
import { Project } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class ProjectService extends BaseService {

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/projects`;
  }

  public createProject(createData: Project.CreateData): Promise<Project.Data> {
    return this.post({ schema: Project.Schema, data: createData });
  }

  public deleteProject(projectId: string): Promise<void> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.delete({ url: `/${projectId}` });
  }

  public getProject(projectId: string): Promise<Project.Data> {
    return this.get({ schema: Project.Schema, url: `/${projectId}` });
  }

  public getProjects(getData: Project.GetData): Promise<Project.Data[]> {
    return this.get({ schema: Project.Schema.array(), data: getData });
  }

  public updateProject(projectId: string, updateData: Project.UpdateData): Promise<Project.Data> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.put({ schema: Project.Schema, url: `/${projectId}`, data: updateData });
  }

}

export default ProjectService;