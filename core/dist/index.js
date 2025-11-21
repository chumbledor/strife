import di from '@/DependencyInjection.js';
import { NoSQLServiceId } from '@/di//NoSQLInjector.js';
import { AppServiceId } from '@/di/AppInjector.js';
import { SQLServiceId } from '@/di/SQLInjector.js';
import { AccountRouterServiceId } from '@/di/routers/AccountRouterInjector.js';
import { AuthenticationRouterServiceId } from '@/di/routers/AuthenticationRouterInjector.js';
import { FileSystemRouterServiceId } from '@/di/routers/FileSystemRouterInjector.js';
import { ProjectRouterServiceId } from '@/di/routers/ProjectRouterInjector.js';
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
