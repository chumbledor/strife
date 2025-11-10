import ProjectEntity from '../entities/Project.entity.js';
import { ProjectCreateNameInUseError, ProjectDeleteUnauthorizedError, ProjectUpdateUnauthorizedError } from '../errors/project.js';
import BaseRepository from '../repositories/BaseRepository.js';
export default class ProjectRepository extends BaseRepository {
    async existsProject(where) {
        const count = await this.qb()
            .where(where)
            .getCount();
        return count > 0;
    }
    async createProject(account, data) {
        const isNameInUse = await this.existsProject({ account, name: data.name });
        if (isNameInUse)
            return Promise.reject(ProjectCreateNameInUseError);
        const project = new ProjectEntity();
        project.account = account;
        project.name = data.name;
        project.description = data.description;
        await this.em.persistAndFlush(project);
        return project;
    }
    async deleteProject(account, id) {
        const project = await this.getProject(id);
        if (project.account.id != account.id)
            return Promise.reject(ProjectDeleteUnauthorizedError);
        await this.em.removeAndFlush(project);
    }
    async getProject(id) {
        return await this.findOneOrFail({ id });
    }
    async getProjects(data) {
        const where = {};
        if (data.ids && data.ids.length > 0)
            where.id = { $in: data.ids };
        if (data.name)
            where.name = { $like: `%${data.name}` };
        return await this.find(where, {
            offset: data.skip,
            limit: data.take, orderBy: { id: 'ASC' }
        });
    }
    async updateProject(account, id, data) {
        const project = await this.getProject(id);
        if (project.account.id != account.id)
            return Promise.reject(ProjectUpdateUnauthorizedError);
        Object.assign(project, data);
        await this.em.flush();
        return project;
    }
}
