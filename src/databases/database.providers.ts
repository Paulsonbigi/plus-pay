import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../utils/constants';
import { databaseConfig } from './database.config';
import { Users } from 'src/users/user.entity';
import env from '../config/env';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (env.node_env) {
        case 'development':
          config = databaseConfig.development;
          break;
        case 'production':
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);

    //   models go in here
      sequelize.addModels([ Users ]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
