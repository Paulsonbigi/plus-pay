import { Module, MiddlewareConsumer, CacheModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserCreationMiddleware } from './middleware/user.middleware';
// import { VerifyHeaders, VerifyJWT } from 'src/middlewares/headers';
import { userProviders } from './user.providers';
@Module({
  imports: [HttpModule, CacheModule.register()],
  providers: [UserService, ...userProviders],
  controllers: [UserController],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserCreationMiddleware).forRoutes("auth/register");

  }
}
