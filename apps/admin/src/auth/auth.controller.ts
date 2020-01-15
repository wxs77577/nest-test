import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AuthGuard } from '@nestjs/passport';
import { LOCAL_USER_STRATEGY } from 'libs/auth/src/constants';
import { AuthService } from 'libs/auth/src';

class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

@Controller()
export class AuthController {
  constructor() // private authService: AuthService
  {}

  // @Post('login')
  // @UseGuards(AuthGuard(LOCAL_USER_STRATEGY))
  // async login(@Body() dto: LoginDto, @Req() req) {
  //   return {
  //     token: this.authService.login(req.user)
  //   }
  // }
}
