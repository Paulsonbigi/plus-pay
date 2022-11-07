import { Address } from './address.entity';
import { ADDRESS_REPO } from '../utils/constants';

export const addressProviders = [
  {
    provide: ADDRESS_REPO,
    useValue: Address,
  },
];
