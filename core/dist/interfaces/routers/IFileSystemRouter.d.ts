import { type ServiceIdentifier } from 'inversify';
import { type IBaseRouter } from '../routers/IBaseRouter.js';
export interface IFileSystemRouter extends IBaseRouter {
}
export declare const FileSystemRouterServiceId: ServiceIdentifier<IFileSystemRouter>;
