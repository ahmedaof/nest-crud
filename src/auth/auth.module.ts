import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserTokensModule } from 'src/user-tokens/user-tokens.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [UserTokensModule, PassportModule, UserModule,  JwtModule.register({
    secret: 'jwt_secret_dentunity',
    signOptions: { expiresIn: '600000s' },
  }),
],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule {}
