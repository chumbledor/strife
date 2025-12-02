import FileSystemRouter from '@/routers/FileSystemRouter.js';
import di from '@/DependencyInjection.js';
import { type ServiceIdentifier } from 'inversify';

export const FileSystemRouterServiceId: ServiceIdentifier<FileSystemRouter> = Symbol.for('FileSystemRouterServiceId');
di.bind(FileSystemRouterServiceId).to(FileSystemRouter).inSingletonScope();