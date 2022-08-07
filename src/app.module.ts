import { isAdmin } from './common/middleware/isAdmin.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import db_connection from './db_connection';
import { UserTokensModule } from './user-tokens/user-tokens.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(db_connection), TaskModule, UserModule, AuthModule,UserTokensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

