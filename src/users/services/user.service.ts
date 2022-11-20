import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import { CreateUserDTO, LoginUserDTO, UserSecondRegistrationDTO } from '../dto/user.dto';
import env from '../../config/env';
import { Users } from '../user.entity';
import { Address } from 'src/address/address.entity';
import { HashPassword } from 'src/utils/encryption';
import { userRegisterInterface, userLoginInterface, UserSecondRegistrationInterface } from '../interface/user.interface';
import { JwtService } from '@nestjs/jwt';
import { AddressService } from 'src/address/address.service';

@Injectable()
export class UserService {
    constructor(
        private httpService: HttpService,
        private jwtService: JwtService,
        private addressService: AddressService
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
        // console.log("We are here...")
            const { email, password, app_id }: userLoginInterface = req.body;
            let user = await Users.findOne({ where: { email }})

            // login token generation
            const payload = { email: user.email, id: user.id };
            const newToken = this.jwtService.sign(payload)
            
            return { code: HttpStatus.OK, message: 'Logged successfully.', data: { token: newToken } };

        } catch (error) {
            return { code: HttpStatus.INTERNAL_SERVER_ERROR, message: 'there was a problem', error: error.toString(), data: {} };
        }
    };

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.findOne(email);
        if (user && user.password === password) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

    async findOne (email:string) {
        return await Users.findOne({ where: { email } })
    };

    async loggedIn(req: Request) {
        try {
            console.log("We are here...", req.user['_id'])

            let user = await Users.findOne({ where: { id: req.user['_id'] }})

            // login token generation
            // send send an email to the user for successful login
            return { code: HttpStatus.OK, message: 'Logged successfully.', data: { user } };

        } catch (error) {
            return { code: HttpStatus.INTERNAL_SERVER_ERROR, message: 'there was a problem', error: error.toString(), data: {} };
        }
    };

    async allUsers(req: Request) {
        try {

            let user = await Users.findAll()

            // login token generation
            // send send an email to the user for successful login
            return { code: HttpStatus.OK, message: 'Logged successfully.', data: { user } };

        } catch (error) {
            return { code: HttpStatus.INTERNAL_SERVER_ERROR, message: 'there was a problem', error: error.toString(), data: {} };
        }
    };

    async stepTwoRegistration(req: Request, dto: UserSecondRegistrationDTO) {
        try {
            const { first_name, last_name, street, lga, state, region, country, phone_number }: UserSecondRegistrationInterface = req.body;
            let user = await Users.findOne({ where: { id: req.user['_id'] }})
            user.first_name=first_name;
            user.last_name=last_name;
            user.phone_number=phone_number;
            await this.addressService.createAddress({ street, lga, state, region, country })
            console.log("street, lga, state, region, country, phone_number")
            await user.save();
            
            await user.save();

            // login token generation
            // send send an email to the user for successful login
            return { code: HttpStatus.OK, message: 'User updated successfully.', data: { user } };

        } catch (error) {
            return { code: HttpStatus.INTERNAL_SERVER_ERROR, message: 'there was a problem', error: error.toString(), data: {} };
        }
    };

}
