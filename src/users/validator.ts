import { Controller, Get, Body, Post, Req, Res, Injectable, UsePipes, NestMiddleware, ValidationPipe, HttpStatus, Query, Param } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { NextFunction, Response, Request } from 'express';
import { CreateUserDTO } from './dto/user.dto';
import { Users } from './user.entity';
import env from '../config/env';
import { response } from 'src/utils/response';

export class emailExitsValidator implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const { email } = req.body;
        let user = await Users.findOne({
            where: { email }
        })
        if(user){
            return response(res, { code: HttpStatus.FORBIDDEN, message: 'unknown request', data: {} });
        }
        next();
    };
}
  
