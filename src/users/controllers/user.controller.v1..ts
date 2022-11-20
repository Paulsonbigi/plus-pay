import { Controller, Get, Body, Post, Req, Res, Patch, UsePipes, ValidationPipe, UseGuards, Query, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { response } from '../../utils/response';
import { CreateUserDTO, LoginUserDTO, UserSecondRegistrationDTO } from '../dto/user.dto';
import { JwtAuthGuard } from '../jwt.strategy';
import { LocalStrategy } from '../user.strategy';
import { Role } from '../roles/role.enum';
import { Roles } from '../roles/roles.decorator';
import { RolesGuard } from '../roles/roles.guard';

@Controller('v1/auth')
@UsePipes(new ValidationPipe())
export class UserControllerV1 {
    constructor(private readonly userService: UserService) { }

    @Post('/register')
    public async register(@Req() req, @Res() res, @Body() body: CreateUserDTO) {
        const data = await this.userService.createUser(req, body);
        return response(res, data);
    };

    // @UseGuards(LocalAuthGuard)
    @Post('/login')
    public async login(@Req() req, @Res() res, @Body() body: LoginUserDTO) {
        const data = await this.userService.loginUser(req, body);
        return response(res, data);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/my-account')
    public async loggedIn(@Req() req, @Res() res) {
        const data = await this.userService.loggedIn(req);
        return response(res, data);
    }

    // Role based access
    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard)
    @Get('/all-users')
    public async allUsers(@Req() req, @Res() res) {
        const data = await this.userService.allUsers(req);
        return response(res, data);
    }


    // Role based access
    // @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard)
    @Patch('/step-two-registration')
    public async stepTwoRegistration(@Req() req, @Res() res, @Body() body: UserSecondRegistrationDTO) {
        const data = await this.userService.stepTwoRegistration(req, body);
        return response(res, data);
    }

}