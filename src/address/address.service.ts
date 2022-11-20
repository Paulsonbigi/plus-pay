import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
// import { CreateUserDTO } from './dto/user.dto';
import env from '../config/env';
import { Address } from './address.entity';
import { AddressInterface } from './addressInterface';

@Injectable()
export class AddressService {
    constructor(
        private httpService: HttpService,
    ) {}

    async createAddress(dto: AddressInterface) {
        try {

            await Address.create({
               ...dto
            })
            return { code: 200, message: 'User created' };
        } catch (error) {
            console.log("okay failing....", error)
            return { code: HttpStatus.INTERNAL_SERVER_ERROR, message: 'there was a problem', data: {} };
        }
    };

    async emailExitsValidator(email: string) {
       
        return
    };

}
