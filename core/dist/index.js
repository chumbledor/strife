import './src/App.js';
import di from './src/DependencyInjection.js';
import './src/NoSQL.js';
import './src/routers/AccountRouter.js';
import './src/routers/AuthenticationRouter.js';
import './src/routers/FileSystemRouter.js';
import './src/routers/ProjectRouter.js';
import './src/SQL.js';
import { AppServiceId } from './interfaces/IApp.js';
import { NoSQLServiceId } from './interfaces/INoSQL.js';
import { SQLServiceId } from './interfaces/ISQL.js';
import { AccountRouterServiceId } from './interfaces/routers/IAccountRouter.js';
import { AuthenticationRouterServiceId } from './interfaces/routers/IAuthenticationRouter.js';
import { FileSystemRouterServiceId } from './interfaces/routers/IFileSystemRouter.js';
import { ProjectRouterServiceId } from './interfaces/routers/IProjectRouter.js';
const host = process.env.APP_HOST ?? '0.0.0.0';
const port = process.env.APP_PORT
    ? Number.parseInt(process.env.APP_PORT)
    : 3000;
const app = await di.getAsync(AppServiceId);
await app.initialize();
const sql = await di.getAsync(SQLServiceId);
await sql.initialize();
const nosql = await di.getAsync(NoSQLServiceId);
await nosql.initialize();
const accountRouter = await di.getAsync(AccountRouterServiceId);
await accountRouter.register(app);
const authenticationRouter = await di.getAsync(AuthenticationRouterServiceId);
await authenticationRouter.register(app);
const projectRouter = await di.getAsync(ProjectRouterServiceId);
await projectRouter.register(app);
const fileSystemRouter = await di.getAsync(FileSystemRouterServiceId);
await fileSystemRouter.register(app);
app.listen(host, port);
if (process.env.NODE_ENV == 'development')
    sql.update();
