import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm/dist/typeorm.module'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './models/users/user.module';
import { ConfigModule} from '@nestjs/config'

@Module({
  imports: [UserModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
