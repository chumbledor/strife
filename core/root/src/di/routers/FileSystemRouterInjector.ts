import FileSystemRouter from '@/routers/FileSystemRouter.js';
import di from '@/DependencyInjection.js';
import { type IFileSystemRouter } from "@interfaces/routers/IFileSystemRouter.js";
import { type ServiceIdentifier } from 'inversify';

export const FileSystemRouterServiceId: ServiceIdentifier<IFileSystemRouter> = Symbol.for('FileSystemRouterServiceId');
di.bind(FileSystemRouterServiceId).to(FileSystemRouter).inSingletonScope();