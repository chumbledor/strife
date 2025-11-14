import BaseRouter from '../routers/BaseRouter.js';
import { type IProjectRouter } from '../../interfaces/routers/IProjectRouter.js';
import { type FastifyInstance } from 'fastify';
export default class ProjectRouter extends BaseRouter implements IProjectRouter {
    protected get prefix(): string | undefined;
    routes(instance: FastifyInstance): Promise<void>;
    private createProject;
    private deleteProject;
    private getProject;
    private getProjects;
    private updateProject;
}
