import { Controller, Get, Body, Post, Req, Res, UsePipes, ValidationPipe, HttpStatus, Query, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { response } from '../utils/response';
import { CreateUserDTO, LoginUserDTO } from './dto/user.dto';

@Controller('v1/auth')
@UsePipes(new ValidationPipe())
export class UserControllerV1 {
    constructor(private readonly userService: UserService) { }

    @Post('/register')
    public async register(@Req() req, @Res() res, @Body() body: CreateUserDTO) {
        const data = await this.userService.createUser(req, body);
        return response(res, data);
    };

    @Post('/login')
    public async login(@Req() req, @Res() res, @Body() body: LoginUserDTO) {
        const data = await this.userService.loginUser(req, body);
        return response(res, data);
    }

}
