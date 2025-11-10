import { type IBaseService } from '@interfaces/services/IBaseService';
import { type CreateProjectData, type GetProjectsData, type ProjectData, type UpdateProjectData } from '@strife/common';
import { type ServiceIdentifier } from 'inversify';

export interface IProjectService extends IBaseService {
  createProject(data: CreateProjectData): Promise<ProjectData>;
  deleteProject(id: string): Promise<void>;
  getProject(id: string): Promise<ProjectData>;
  getProjects(data: GetProjectsData): Promise<ProjectData[]>;
  updateProject(id: string, data: UpdateProjectData): Promise<ProjectData>;
}

export const ProjectServiceServiceId: ServiceIdentifier<IProjectService> = Symbol.for('ProjectServiceServiceId');