import { type IApp } from '../../interfaces/IApp.js';
import { type IBaseRouter } from '../../interfaces/routers/IBaseRouter.js';
import { type FastifyInstance } from 'fastify';
export default abstract class BaseRouter implements IBaseRouter {
    register(app: IApp): Promise<void>;
    protected get prefix(): string | undefined;
    protected routes(instance: FastifyInstance): Promise<void>;
}
