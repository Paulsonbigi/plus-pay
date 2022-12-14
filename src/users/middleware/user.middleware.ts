import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@nestjs/common';
import { Users } from '../user.entity';
import { response } from 'src/utils/response';
import { decryptPassword } from 'src/utils/encryption';
import { passwordDecryptInterface } from 'src/utils/interface';
import { userLoginInterface, UserSecondRegistrationInterface } from '../interface/user.interface';

@Injectable()
export class UserCreationMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const { email } = req.body;
        let user = await Users.findOne({
            where: { email: email.toLowerCase() }
        })
        if(user){
            return response(res, { code: HttpStatus.BAD_REQUEST, message: 'User with this email exists.', data: { } })
        }
        next();
    }
}

export class UserLoginMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const { email, password, app_id }: userLoginInterface = req.body;
        let user = await Users.findOne({
            where: { email: email.toLowerCase() }
        })
        if(!user){
            return response(res, { code: HttpStatus.UNAUTHORIZED, message: 'Invalid registered email.', data: { } })
        }
        let value: passwordDecryptInterface = {
            password, hasPassword: user.password
        }
        let comparePassword: boolean = await decryptPassword(value)

        if(!comparePassword){
            return response(res, { code: HttpStatus.UNAUTHORIZED, message: 'Invalid password.', data: { } })
        }
        if(user.blacklist){
            return response(res, { code: HttpStatus.FORBIDDEN, message: 'Account has been blocked.', data: { } })
        }
        // let userByAppId = await Users.findOne({
        //     where: { email: email.toLowerCase(), app_id }
        // })
        // check if a user is trying to login with a different device
        // send a notification email
        next();
    }
}


export class StepTwoMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const { phone_number }: UserSecondRegistrationInterface = req.body;
        let user = await Users.findOne({
            where: { phone_number }
        })
        if(user){
            return response(res, { code: HttpStatus.UNAUTHORIZED, message: 'Phone number already in use.', data: { } })
        }
        next();
    }
}
