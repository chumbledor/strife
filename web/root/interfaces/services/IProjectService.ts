import { type IBaseService } from '@interfaces/services/IBaseService';
import { type CreateProjectData, type GetProjectsData, type ProjectData, type UpdateProjectData } from '@strife/common';

export interface IProjectService extends IBaseService {
  createProject(createProjectData: CreateProjectData): Promise<ProjectData>;
  deleteProject(projectId: string): Promise<void>;
  getProject(projectId: string): Promise<ProjectData>;
  getProjects(getProjectsData: GetProjectsData): Promise<ProjectData[]>;
  updateProject(projectId: string, updateProjectData: UpdateProjectData): Promise<ProjectData>;
}