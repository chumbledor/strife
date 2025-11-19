import BaseRouter from '../routers/BaseRouter.js';
import { type IFileSystemRouter } from '../../interfaces/routers/IFileSystemRouter.js';
import { type FastifyInstance } from 'fastify';
export default class FileSystemRouter extends BaseRouter implements IFileSystemRouter {
    protected get prefix(): string | undefined;
    routes(instance: FastifyInstance): Promise<void>;
    private createFileSystemObject;
    private deleteFileSystemObject;
    private getFileSystemObject;
    private getFileSystemObjects;
}
