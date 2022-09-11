import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import { CreateUserDTO } from './dto/user.dto';
import env from '../config/env';
import { emailExitsValidator } from './validator';

@Injectable()
export class UserService {
    constructor(
        private httpService: HttpService,
    ) {}

    async createUser(req: Request, dto: CreateUserDTO) {
        try {
            const { email, password, registrationDevice } = req.body;
            // await new emailExitsValidator(req)

            // return { code: status, message: 'User created', data };
        } catch (error) {
            return { code: HttpStatus.INTERNAL_SERVER_ERROR, message: 'there was a problem', data: {} };
        }
    }


}
