import di from './src/DependencyInjection.js';
import { NoSQLServiceId } from './src/di/NoSQLInjector.js';
import { AppServiceId } from './src/di/AppInjector.js';
import { SQLServiceId } from './src/di/SQLInjector.js';
import { AccountRouterServiceId } from './src/di/routers/AccountRouterInjector.js';
import { AuthenticationRouterServiceId } from './src/di/routers/AuthenticationRouterInjector.js';
import { FileSystemRouterServiceId } from './src/di/routers/FileSystemRouterInjector.js';
import { ProjectRouterServiceId } from './src/di/routers/ProjectRouterInjector.js';
const host = process.env.APP_HOST ?? '0.0.0.0';
const port = process.env.APP_PORT
    ? Number.parseInt(process.env.APP_PORT)
    : 3000;
const app = await di.getAsync(AppServiceId);
const sql = await di.getAsync(SQLServiceId);
const nosql = await di.getAsync(NoSQLServiceId);
const accountRouter = await di.getAsync(AccountRouterServiceId);
await accountRouter.register(app);
const authenticationRouter = await di.getAsync(AuthenticationRouterServiceId);
await authenticationRouter.register(app);
const projectRouter = await di.getAsync(ProjectRouterServiceId);
await projectRouter.register(app);
const fileSystemRouter = await di.getAsync(FileSystemRouterServiceId);
await fileSystemRouter.register(app);
app.listen(host, port);
if (process.env.NODE_ENV == 'development') {
    sql.update();
    nosql.update();
}
