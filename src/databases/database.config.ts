import { IDatabaseConfig } from './database.interface';
import env from '../config/env';

export const databaseConfig: IDatabaseConfig = {
    development: {
        // db_uri: env.postgres_db,
        username: env.postgres_username,
        password: env.postgres_password,
        database: env.postgres_db,
        host: env.postgres_server,
        port: env.postgres_port,
        dialect: 'postgres',
        ssl: false
    },
    production: {
        username: env.mysql_username,
        password: env.mysql_password,
        database: env.mysql_db,
        host: env.mysql_uri,
        port: env.mysql_port,
        dialect: 'mysql'
    },
};
