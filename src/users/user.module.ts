import { Module, MiddlewareConsumer, CacheModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserService } from './user.service';
import { UserControllerV1 } from './user.controller.v1.';
import { UserCreationMiddleware, UserLoginMiddleware } from './middleware/user.middleware';
// import { VerifyHeaders, VerifyJWT } from 'src/middlewares/headers';

import { userProviders } from './user.providers';
@Module({
  imports: [HttpModule, CacheModule.register()],
  providers: [UserService, ...userProviders],
  controllers: [UserControllerV1],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserCreationMiddleware).forRoutes("v1/auth/register");
    consumer.apply(UserLoginMiddleware).forRoutes("v1/auth/login");
  }
}
