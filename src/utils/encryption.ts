import * as bcrypt from 'bcrypt';
import env from '../config/env';
import { passwordDecryptInterface } from "./interface"

let salt: any = bcrypt.genSaltSync(10)

export const HashPassword = async(password) => {
    const salt = await bcrypt.genSalt(env.salt_round);

    return await bcrypt.hash(password, salt);
}

export const decryptPassword = async(value: passwordDecryptInterface) => {
    return await bcrypt.compareSync(value.password, value.hasPassword);
}