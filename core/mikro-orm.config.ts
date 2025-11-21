import { MySqlDriver } from '@mikro-orm/mysql';
import type { Options } from '@mikro-orm/mysql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const driver = MySqlDriver;

const host = process.env.SQL_HOST;
const port = process.env.SQL_PORT
  ? Number.parseInt(process.env.SQL_PORT)
  : 3306;
const user = process.env.SQL_USER;
const password = process.env.SQL_PASSWORD;
const dbName = 'public';

const entitiesTsPath = path.join(__dirname, 'src/**/*.entity.ts');
const entitiesTs = [ entitiesTsPath ]; // Folder-based discovery setup, using common filename suffix (input path)
const entitiesPath = path.join(__dirname, '../dist/src/**/*.entity.js');
const entities = [ entitiesPath ]; // Folder-based discovery setup, using common filename suffix (output path)

const metadataProvider = TsMorphMetadataProvider; // Use the ts-morph reflection, an alternative to the default reflect-metadata provider (https://mikro-orm.io/docs/metadata-providers)
const debug = true;

const isDevelopmentEnvironment = process.env.NODE_ENV == 'development';

const config: Options = {
  driver,
  host,
  port,
  user,
  password,
  dbName,
  entitiesTs,
  entities,
  preferTs: isDevelopmentEnvironment,
  metadataProvider,
  debug
};

export default config;