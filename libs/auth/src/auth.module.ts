import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport'
import { JwtModule, JwtService } from '@nestjs/jwt'
import {JWT_MODULE_OPTIONS} from '@nestjs/jwt/dist/jwt.constants'
const jwtModule = JwtModule.register({
  secret: process.env.SECRET,
  signOptions: {
    expiresIn: '60s'
  }
})

// @Global()
@Module({
  imports: [
    PassportModule,
    jwtModule
  ],
  providers: [AuthService],
  exports: [AuthService, JWT_MODULE_OPTIONS],
})
export class AuthModule { }
