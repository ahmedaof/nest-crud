import { TaskModule } from './../task/task.module';
import { UserTokensModule } from './../user-tokens/user-tokens.module';
import { isAdmin } from './../common/middleware/isAdmin.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User]),UserTokensModule,TaskModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAdmin)
      .forRoutes('user');
  }}
