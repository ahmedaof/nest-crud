import { UserService } from './../user/user.service';
import { CreateUserDto, SigninDto } from './../user/dto/create-user.dto';
import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly usersService: UserService) { }
  @Post('/signin')
  signin(@Body() signinDto: SigninDto, @Req() req: any) {
    // console.log(req.headers);

    return this.authService.validateUser(signinDto);
  }

  @Post('/signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    //  console.log(createUserDto);
    let signinDto = await { email: createUserDto.email, password: createUserDto.password }

    let user = await this.usersService.signup(createUserDto);
    if (user) {
      return this.authService.validateUser(signinDto);
    }
    return null
  }

}
