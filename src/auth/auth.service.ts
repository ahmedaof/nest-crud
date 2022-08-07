import { SigninDto } from './../user/dto/create-user.dto';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { UserTokensService } from 'src/user-tokens/user-tokens.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {


  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private userTokens: UserTokensService
  ) { }

  async validateUser(signinDto: SigninDto): Promise<any> {
    let { email, password } = signinDto
    const user = await this.usersService.signin(email, password);
    if (user.email) {
      const { password, ...result } = user;
      let token = "Bearer " + this.jwtService.sign(result)
      this.userTokens.create({ token, userId: user.id })
      return {
        Authorization: token,
        data: result
      };
    }
    return null;
  }

}
