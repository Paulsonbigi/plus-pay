import { Controller, Get, Body, Post, Req, Res, UsePipes, ValidationPipe, HttpStatus, Query, Param } from '@nestjs/common';
import { response } from '../utils/response';
import { AddressService } from './address.service';

@Controller('address')
@UsePipes(new ValidationPipe())
export class AddressController {
    constructor(private readonly userServicew: AddressService) { }

    @Post('/create')
    public async register(@Req() req, @Res() res, @Body() body) {
        // const data = await this.AddressService.createUser(req, body);
        // return response(res, data);
    }

}
