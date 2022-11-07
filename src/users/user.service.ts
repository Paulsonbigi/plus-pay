import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import { CreateUserDTO } from './dto/user.dto';
import env from '../config/env';
import { Users } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        private httpService: HttpService,
    ) {}

    async createUser(req: Request, dto: CreateUserDTO) {
        try {
            const { email, password, registration_device, app_id }: any = req.body;
            await Users.create({ email: email.toLowerCase(), password, registration_device, app_id })
            return { code: HttpStatus.OK, message: 'User created', data: { email, password, registration_device, app_id } };
        } catch (error) {
            return { code: HttpStatus.INTERNAL_SERVER_ERROR, message: 'there was a problem', error: error.toString(), data: {} };
        }
    };

    async emailExitsValidator(email: string) {
        
    };

}
