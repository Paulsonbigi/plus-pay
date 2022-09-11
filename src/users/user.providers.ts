import { Users } from './user.entity';
import { USER_REPO } from '../utils/constants';

export const userProviders = [
  {
    provide: USER_REPO,
    useValue: Users,
  },
];
