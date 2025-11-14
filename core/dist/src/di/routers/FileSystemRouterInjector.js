import FileSystemRouter from '../../routers/FileSystemRouter.js';
import di from '../../DependencyInjection.js';
export const FileSystemRouterServiceId = Symbol.for('FileSystemRouterServiceId');
di.bind(FileSystemRouterServiceId).to(FileSystemRouter).inSingletonScope();
