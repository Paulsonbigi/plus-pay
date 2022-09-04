import { Controller, Get, Body, Post, Req, Res, UsePipes, ValidationPipe, HttpStatus, Query, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { response } from '../utils/response';
import { CreateUserDTO } from './dto/user.dto';

@Controller('auth')
@UsePipes(new ValidationPipe())
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/register')
    public async register(@Req() req, @Res() res, @Body() body: CreateUserDTO) {
        const data = await this.userService.createUser(req, body);
        return response(res, data);
    }

}
