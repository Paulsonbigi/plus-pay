export interface  IProductionDatabaseConfigAttributes{
    username?: string;
    password?: string;
    database?: string;
    host?: string;
    port?: number | string;
    dialect?: string;
    urlDatabase?: string;
}

export interface IDevelopmentDatabaseConfigAttributes {
    // db_uri: string;
    username?: string;
    password?: string;
    database?: string;
    host?: string;
    ssl?:boolean;
    port?: number | string;
    dialect?: string;
    urlDatabase?: string;
}

export interface IDatabaseConfig {
    development: IDevelopmentDatabaseConfigAttributes;
    production: IProductionDatabaseConfigAttributes;
}
