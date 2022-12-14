import { Module, MiddlewareConsumer, CacheModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserService } from './services/user.service';
import { UserControllerV1 } from './controllers/user.controller.v1.';
import { UserCreationMiddleware, UserLoginMiddleware, StepTwoMiddleware } from './middleware/user.middleware';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './user.strategy';
import { jwtConstants } from 'src/utils/constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './roles/roles.guard';
import { AddressService } from 'src/address/address.service';

import { userProviders } from './user.providers';
@Module({
  imports: [
    HttpModule, 
    PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30m' },
  }), 
  CacheModule.register()],
  providers: [UserService, LocalStrategy, AddressService, JwtStrategy, ...userProviders],
  controllers: [UserControllerV1],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserCreationMiddleware).forRoutes("v1/auth/register");
    consumer.apply(UserLoginMiddleware).forRoutes("v1/auth/login");
    consumer.apply(StepTwoMiddleware).forRoutes("v1/auth/step-two-registration");
  }
}
