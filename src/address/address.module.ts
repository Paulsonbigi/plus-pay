import { Module, MiddlewareConsumer, CacheModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AddressService } from './address.service';
import { addressProviders } from './address.provider';
import { AddressController } from './address.controller';
// import { VerifyHeaders, VerifyJWT } from 'src/middlewares/headers';

@Module({
  imports: [HttpModule, CacheModule.register()],
  providers: [AddressService, ...addressProviders],
  controllers: [AddressController],
})
export class AddressModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(VerifyHeaders).forRoutes(UserController);

  }
}
