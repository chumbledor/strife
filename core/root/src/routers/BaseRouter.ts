import { type IApp } from '@interfaces/IApp.js';
import { type IBaseRouter } from '@interfaces/routers/IBaseRouter.js';
import { type FastifyInstance } from 'fastify';

export default abstract class BaseRouter implements IBaseRouter {

  public async register(app: IApp): Promise<void> {
    await app.instance.register(this.routes.bind(this), { prefix: this.prefix });
  }

  protected get prefix(): string | undefined {
    return undefined;
  }

  protected async routes(instance: FastifyInstance): Promise<void> {}

}