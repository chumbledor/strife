import BaseRouter from '../routers/BaseRouter.js';
import { type IAuthenticationRouter } from '../../interfaces/routers/IAuthenticationRouter.js';
import { type FastifyInstance } from 'fastify';
export default class AuthenticationRouter extends BaseRouter implements IAuthenticationRouter {
    protected get prefix(): string | undefined;
    protected routes(instance: FastifyInstance): Promise<void>;
    private login;
    private logout;
    private refresh;
    private updateAuthentication;
}
