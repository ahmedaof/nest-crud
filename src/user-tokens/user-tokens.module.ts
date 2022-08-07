import { Module } from '@nestjs/common';
import { UserTokensService } from './user-tokens.service';
import { UserTokensController } from './user-tokens.controller';
import { UserToken } from './entities/user-token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserToken])],
  controllers: [UserTokensController],
  providers: [UserTokensService],
  exports: [UserTokensService]
})
export class UserTokensModule { }
