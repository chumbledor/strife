import { type IBaseController } from '../controllers/IBaseController.js';
import { type IUser } from '../IUser.js';
import { type QBFilterQuery } from '@mikro-orm/core';
import { ProjectData, type CreateProjectData, type GetProjectsData, type UpdateProjectData } from '@strife/common';
export interface IProjectController extends IBaseController {
    existsProject(where: QBFilterQuery<ProjectData>): Promise<boolean>;
    createProject(user: IUser, createProjectData: CreateProjectData): Promise<ProjectData>;
    deleteProject(user: IUser, projectid: string): Promise<void>;
    getProject(projectId: string): Promise<ProjectData>;
    getProjects(getProjectsData: GetProjectsData): Promise<ProjectData[]>;
    updateProject(user: IUser, projectId: string, updateProjectData: UpdateProjectData): Promise<ProjectData>;
}
