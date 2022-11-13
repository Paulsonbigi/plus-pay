import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import { CreateUserDTO, LoginUserDTO } from './dto/user.dto';
import env from '../config/env';
import { Users } from './user.entity';
import { HashPassword } from 'src/utils/encryption';
import { userRegisterInterface, userLoginInterface } from './interface/user.interface';

@Injectable()
export class UserService {
    constructor(
        private httpService: HttpService,
    ) {}

    async createUser(req: Request, dto: CreateUserDTO) {
        try {
            const { email, password, registration_device, app_id }: userRegisterInterface = req.body;
            let HashedPassword: string = await HashPassword(password)
            await Users.create({ email: email.toLowerCase(), password: HashedPassword, registration_device, app_id })
            return { code: HttpStatus.OK, message: 'User created', data: { email, password, registration_device, app_id } };
        } catch (error) {
            return { code: HttpStatus.INTERNAL_SERVER_ERROR, message: 'there was a problem', error: error.toString(), data: {} };
        }
    };

    async loginUser(req: Request, dto: LoginUserDTO) {
        try {
            const { email, password, app_id }: userLoginInterface = req.body;
            let user = await Users.findOne({ where: { email }})
            console.log("HashedPassword...", password)

            return { code: HttpStatus.OK, message: 'User logged in', data: { user } };
        } catch (error) {
            return { code: HttpStatus.INTERNAL_SERVER_ERROR, message: 'there was a problem', error: error.toString(), data: {} };
        }
    };

}
