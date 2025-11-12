import di from '@/DependencyInjection.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { NoSQLServiceId } from '@interfaces/INoSQL.js';
import { SQLServiceId } from '@interfaces/ISQL.js';
import { type IUser } from '@interfaces/IUser.js';
import { ProjectRouterServiceId, type IProjectRouter } from '@interfaces/routers/IProjectRouter.js';
import { CreateFileSystemDirectorySchema, CreateProjectSchema, FileSystemObjectIdSchema, GetProjectsSchema, ProjectIdSchema, UpdateProjectSchema, type ProjectData } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
class ProjectRouter extends BaseRouter implements IProjectRouter {

  protected override get prefix(): string | undefined {
    return 'projects';
  }

  public override async routes(instance: FastifyInstance): Promise<void> {
    super.routes(instance);
    instance.post('/', { onRequest: [ instance.authenticate ] }, this.createProject.bind(this));
    instance.delete('/:projectId', { onRequest: [ instance.authenticate ] }, this.deleteProject.bind(this));
    instance.get('/:projectId', this.getProject.bind(this));
    instance.get('/', this.getProjects.bind(this));
    instance.put('/:projectId', { onRequest: [ instance.authenticate ] }, this.updateProject.bind(this));
  }

  private async createProject(request: FastifyRequest, reply: FastifyReply): Promise<ProjectData> {
    const sql = await di.getAsync(SQLServiceId);
    const user = request.user as IUser;
    const data = await CreateProjectSchema.parseAsync(request.body);
    return await sql.project.createProject(user.account, data);
  }

  private async deleteProject(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const sql = await di.getAsync(SQLServiceId);
    const user = request.user as IUser;
    const { projectId } = await ProjectIdSchema.parseAsync(request.params);
    await sql.project.deleteProject(user.account, projectId);
  }

  private async getProject(request: FastifyRequest, reply: FastifyReply): Promise<ProjectData> {
    const sql = await di.getAsync(SQLServiceId);
    const { projectId } = await ProjectIdSchema.parseAsync(request.params);
    return await sql.project.getProject(projectId);
  }

  private async getProjects(request: FastifyRequest, reply: FastifyReply): Promise<ProjectData[]> {
    const sql = await di.getAsync(SQLServiceId);
    const data = await GetProjectsSchema.parseAsync(request.query);
    return await sql.project.getProjects(data);
  }

  private async updateProject(request: FastifyRequest, reply: FastifyReply): Promise<ProjectData> {
    const sql = await di.getAsync(SQLServiceId);
    const user = request.user as IUser;
    const { projectId } = await ProjectIdSchema.parseAsync(request.params);
    const data = await UpdateProjectSchema.parseAsync(request.body);
    return await sql.project.updateProject(user.account, projectId, data);
  }

}

di.bind(ProjectRouterServiceId).to(ProjectRouter).inSingletonScope();