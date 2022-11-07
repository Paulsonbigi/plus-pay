import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './databases/database.module';
import { UserModule } from './users/user.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [ScheduleModule.forRoot(), ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UserModule, AddressModule],
  controllers: [AppController],
})
export class AppModule {}
