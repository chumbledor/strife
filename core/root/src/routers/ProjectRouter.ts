import di from '@/DependencyInjection.js';
import { ProjectControllerServiceId } from '@/di/controllers/ProjectControllerInjector.js';
import BaseRouter from '@/routers/BaseRouter.js';
import { type IUser } from '@interfaces/IUser.js';
import { type IProjectRouter } from '@interfaces/routers/IProjectRouter.js';
import { CreateProjectSchema, GetProjectsSchema, ProjectIdSchema, UpdateProjectSchema, type ProjectData } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export class ProjectRouter extends BaseRouter implements IProjectRouter {

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
    const user = request.user as IUser;
    const createProjectData = await CreateProjectSchema.parseAsync(request.body);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    return await projectController.createProject(user, createProjectData);
  }

  private async deleteProject(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as IUser;
    const { projectId } = await ProjectIdSchema.parseAsync(request.params);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    await projectController.deleteProject(user, projectId);
  }

  private async getProject(request: FastifyRequest, reply: FastifyReply): Promise<ProjectData> {
    const { projectId } = await ProjectIdSchema.parseAsync(request.params);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    return await projectController.getProject(projectId);
  }

  private async getProjects(request: FastifyRequest, reply: FastifyReply): Promise<ProjectData[]> {
    const getProjectsData = await GetProjectsSchema.parseAsync(request.query);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    return await projectController.getProjects(getProjectsData);
  }

  private async updateProject(request: FastifyRequest, reply: FastifyReply): Promise<ProjectData> {
    const user = request.user as IUser;
    const { projectId } = await ProjectIdSchema.parseAsync(request.params);
    const updateProjectData = await UpdateProjectSchema.parseAsync(request.body);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    return await projectController.updateProject(user, projectId, updateProjectData);
  }

}

export default ProjectRouter;