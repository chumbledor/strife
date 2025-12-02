import App from '@/App.js';
import { type FastifyInstance } from 'fastify';

export abstract class BaseRouter {

  public async register(app: App): Promise<void> {
    await app.instance.register(this.routes.bind(this), { prefix: this.prefix });
  }

  protected get prefix(): string | undefined {
    return undefined;
  }

  protected async routes(instance: FastifyInstance): Promise<void> {}

}

export default BaseRouter;