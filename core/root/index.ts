import '@/App.js';
import '@/Database.js';
import di from '@/DependencyInjection.js';
import '@/routers/AccountRouter.js';
import '@/routers/AuthenticationRouter.js';
import '@/routers/ProjectRouter.js';
import { AppServiceId } from '@interfaces/IApp.js';
import { DatabaseServiceId } from '@interfaces/IDatabase.js';
import { AccountRouterServiceId } from '@interfaces/routers/IAccountRouter.js';
import { AuthenticationRouterServiceId } from '@interfaces/routers/IAuthenticationRouter.js';
import { ProjectRouterServiceId } from '@interfaces/routers/IProjectRouter.js';
import mongoose from 'mongoose'

const host = '0.0.0.0';
const port = 3000;

const app = await di.getAsync(AppServiceId);
await app.initialize();

const database = await di.getAsync(DatabaseServiceId);
await database.initialize();

const test = await mongoose.connect('mongodb://127.0.0.1:27017/test');

const accountRouter = await di.getAsync(AccountRouterServiceId);
await accountRouter.register(app);

const authenticationRouter = await di.getAsync(AuthenticationRouterServiceId);
await authenticationRouter.register(app);

const projectRouter = await di.getAsync(ProjectRouterServiceId);
await projectRouter.register(app);

app.listen(host, port);

if (process.env.NODE_ENV == 'development')
  database.update();