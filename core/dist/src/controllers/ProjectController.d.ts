import BaseController from '../controllers/BaseController.js';
import { type IProjectController } from '../../interfaces/controllers/IProjectController.js';
import { type IUser } from '../../interfaces/IUser.js';
import { type QBFilterQuery } from '@mikro-orm/core';
import { type CreateProjectData, type GetProjectsData, type ProjectData, type UpdateProjectData } from '@strife/common';
export default class ProjectController extends BaseController implements IProjectController {
    existsProject(where: QBFilterQuery<ProjectData>): Promise<boolean>;
    createProject(user: IUser, createProjectData: CreateProjectData): Promise<ProjectData>;
    deleteProject(user: IUser, projectId: string): Promise<void>;
    getProject(projectId: string): Promise<ProjectData>;
    getProjects(getProjectsData: GetProjectsData): Promise<ProjectData[]>;
    updateProject(user: IUser, projectId: string, updateProjectData: UpdateProjectData): Promise<ProjectData>;
}
