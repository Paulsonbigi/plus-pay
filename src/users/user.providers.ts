import { Users } from './user.entity';
import { USER_REPO } from '../utils/constants';

export const cryptoProviders = [
  {
    provide: USER_REPO,
    useValue: Users,
  },
];
