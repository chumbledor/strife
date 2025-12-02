import di from '@/DependencyInjection.js';
import { ProjectControllerServiceId } from '@/di/controllers/ProjectControllerInjector.js';
import BaseRouter from '@/routers/BaseRouter.js';
import User from '@/User.js';
import { Project } from '@strife/common';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { injectable } from 'inversify';

@injectable()
export class ProjectRouter extends BaseRouter {

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

  private async createProject(request: FastifyRequest, reply: FastifyReply): Promise<Project.Data> {
    const user = request.user as User;
    const createData = await Project.CreateSchema.parseAsync(request.body);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    return await projectController.createProject(user, createData);
  }

  private async deleteProject(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = request.user as User;
    const { projectId } = await Project.IdSchema.parseAsync(request.params);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    await projectController.deleteProject(user, projectId);
  }

  private async getProject(request: FastifyRequest, reply: FastifyReply): Promise<Project.Data> {
    const { projectId } = await Project.IdSchema.parseAsync(request.params);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    return await projectController.getProject(projectId);
  }

  private async getProjects(request: FastifyRequest, reply: FastifyReply): Promise<Project.Data[]> {
    const getData = await Project.GetSchema.parseAsync(request.query);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    return await projectController.getProjects(getData);
  }

  private async updateProject(request: FastifyRequest, reply: FastifyReply): Promise<Project.Data> {
    const user = request.user as User;
    const { projectId } = await Project.IdSchema.parseAsync(request.params);
    const updateData = await Project.UpdateSchema.parseAsync(request.body);
    const projectController = await di.getAsync(ProjectControllerServiceId);
    return await projectController.updateProject(user, projectId, updateData);
  }

}

export default ProjectRouter;