import { type IAccountEntity } from '../entities/IAccount.entity.js';
import { type IProjectEntity } from '../entities/IProject.entity.js';
import { type IBaseRepository } from '../repositories/IBaseRepository.js';
import { type QBFilterQuery } from '@mikro-orm/core';
import { type CreateProjectData, type GetProjectsData, type UpdateProjectData } from '@strife/common';
export interface IProjectRepository extends IBaseRepository<IProjectEntity> {
    existsProject(where: QBFilterQuery<IAccountEntity>): Promise<boolean>;
    createProject(account: IAccountEntity, data: CreateProjectData): Promise<IProjectEntity>;
    deleteProject(account: IAccountEntity, id: string): Promise<void>;
    getProject(id: string): Promise<IProjectEntity>;
    getProjects(data: GetProjectsData): Promise<IProjectEntity[]>;
    updateProject(account: IAccountEntity, id: string, data: UpdateProjectData): Promise<IProjectEntity>;
}
