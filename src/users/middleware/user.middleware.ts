import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@nestjs/common';
import { Users } from '../user.entity';
import { response } from 'src/utils/response';

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
