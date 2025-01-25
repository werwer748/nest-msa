import { Body, Controller, Post, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from 'apps/user/src/auth/dto/register.dto';
import { Authorization } from './decorator/authorization.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @Post('register')
  @UsePipes(ValidationPipe) //* 전역으로 ValidationPipe를 사용하면 MSA와 충돌하는 경우가 있다.
  registerUser(@Authorization() token: string, @Body() registerDto: RegisterDto) {
    if (token === null) {
      throw new UnauthorizedException('토큰을 입력해주세요.');
    }

    return this.authService.register(token, registerDto);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  loginUser(@Authorization() token: string) {
    if (token === null) {
      throw new UnauthorizedException('토큰을 입력해주세요.');
    }

    return this.authService.login(token);
  }
}
