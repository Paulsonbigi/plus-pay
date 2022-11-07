import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import env from './config/env';
import { response } from './utils/response';

@Controller()
export class AppController {
  @Get('/')
  getHomeRuote(@Res() res) {
    return response(res, {
      code: HttpStatus.OK,
      message: `Welcome to ${env.app_name}`,
      data: {},
    });
  };
}