import 'dotenv/config';

const env = {
    app_name: process.env.APP_NAME || 'Plux Pay',
    node_env: process.env.NODE_ENV || 'development',
    app_url: process.env.APP_URL,
    port: Number(process.env.PORT) || 5000,
    redis_url: String(process.env.REDIS_URL),
    redis_port: Number(process.env.REDIS_PORT),
    node_logging_level: String(process.env.NODE_LOGGING_LEVEL) || 'info',
    mysql_uri: String(process.env.MYSQL_SERVER),
    mysql_port: Number(process.env.MYSQL_PORT),
    mysql_username: String(process.env.MYSQL_USERNAME),
    mysql_password: String(process.env.MYSQL_PASSWORD),
    mysql_db: String(process.env.MYSQL_DB),
    postgres_server: String(process.env.POSTGRES_SERVER),
    postgres_port: Number(process.env.POSTGRES_PORT),
    postgres_username: String(process.env.POSTGRES_USERNAME),
    postgres_password: String(process.env.POSTGRES_PASSWORD),
    postgres_db: String(process.env.POSTGRES_DB),
    postgres_url: String(process.env.POSTGRES_URL),
    salt_rounds: Number(process.env.SALT_ROUNDS) || 10,
    jwt_secret: String(process.env.JWT_SECRET),
    jwt_expiry: String(process.env.JWT_EXPIRY),
};

export default env;
