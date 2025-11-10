import { MySqlDriver } from '@mikro-orm/mysql';
import type { Options } from '@mikro-orm/mysql';
import { SeedManager } from '@mikro-orm/seeder';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const driver = MySqlDriver;
const driverOptions = {
  // connection: {
  //   ssl: true,
  // }
};

const host = process.env.MIKRO_ORM_HOST;
const port = 3306;
const user = process.env.MIKRO_ORM_USER;
const password = process.env.MIKRO_ORM_PASSWORD;
const dbName = 'public';

const entitiesTsPath = path.join(__dirname, '../root/src/**/*.entity.ts');
const entitiesTs = [ entitiesTsPath ]; // Folder-based discovery setup, using common filename suffix (input path)
const entitiesPath = path.join(__dirname, '../dist/src/**/*.entity.js');
const entities = [ entitiesPath ]; // Folder-based discovery setup, using common filename suffix (output path)

const extensions = [ SeedManager ];
const seeder = {
  path: './src/seeders',
  defaultSeeder: 'DefaultSeeder',
  glob: '!(*.d).{js,ts}',
  emit: 'ts' as const,
  fileName: (className: string): string => className,
}

const metadataProvider = TsMorphMetadataProvider; // Use the ts-morph reflection, an alternative to the default reflect-metadata provider (https://mikro-orm.io/docs/metadata-providers)
const debug = true;

const config: Options = {
  driver,
  driverOptions,
  host,
  port,
  user,
  password,
  dbName,
  entitiesTs,
  entities,
  extensions,
  seeder,
  metadataProvider,
  debug
};

export default config;