import BaseRouter from '../routers/BaseRouter.js';
import { type IAccountRouter } from '../../interfaces/routers/IAccountRouter.js';
import { type FastifyInstance } from 'fastify';
export default class AccountRouter extends BaseRouter implements IAccountRouter {
    protected get prefix(): string | undefined;
    protected routes(instance: FastifyInstance): Promise<void>;
    private createAccount;
    private deleteAccount;
    private getAccount;
    private getAccounts;
    private updateAccount;
}
