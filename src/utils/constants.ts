import * as crypto from 'crypto';
import { promisify } from 'util';

export const SEQUELIZE = 'SequelizeToken';
export const USER_REPO = 'userRepository';
export const ADDRESS_REPO = 'addressRepository';

export const CURRENCY = ['ngn', 'gbp'];

const asyncRandomBytes = promisify(crypto.randomBytes);
export const asyncRandomString = async (length: number) => {
    const rand = await asyncRandomBytes(Math.ceil(length / 2));
    return rand.toString('hex').slice(0, length);
};

// 
export const currencyToCountryCode = (currency: string) => {
    switch (currency.toLowerCase()) {
        case 'ngn':
            return 'NG';
        case 'gbp':
            return 'UK';
        default:
            return 'NG';
    }
};
