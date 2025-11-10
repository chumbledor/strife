import ProjectEntity from '../entities/Project.entity.js';
import BaseRepository from '../repositories/BaseRepository.js';
import { type IAccountEntity } from '../../interfaces/entities/IAccount.entity.js';
import { type IProjectEntity } from '../../interfaces/entities/IProject.entity.js';
import { type IProjectRepository } from '../../interfaces/repositories/IProjectRepository.js';
import { type QBFilterQuery } from '@mikro-orm/core';
import { type CreateProjectData, type GetProjectsData, type UpdateProjectData } from '@strife/common';
export default class ProjectRepository extends BaseRepository<ProjectEntity> implements IProjectRepository {
    existsProject(where: QBFilterQuery<IAccountEntity>): Promise<boolean>;
    createProject(account: IAccountEntity, data: CreateProjectData): Promise<IProjectEntity>;
    deleteProject(account: IAccountEntity, id: string): Promise<void>;
    getProject(id: string): Promise<IProjectEntity>;
    getProjects(data: GetProjectsData): Promise<IProjectEntity[]>;
    updateProject(account: IAccountEntity, id: string, data: UpdateProjectData): Promise<IProjectEntity>;
}
