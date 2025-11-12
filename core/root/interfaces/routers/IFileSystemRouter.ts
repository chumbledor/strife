import { type ServiceIdentifier } from 'inversify';
import { type IBaseRouter } from '@interfaces/routers/IBaseRouter.js';

export interface IFileSystemRouter extends IBaseRouter {}

export const FileSystemRouterServiceId: ServiceIdentifier<IFileSystemRouter> = Symbol.for('FileSystemRouterServiceId');