import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalUserStrategy } from 'libs/auth/src/local-user.strategy';
import { AuthModule as LibAuthModule } from 'libs/auth/src';

@Module({
  imports: [
    LibAuthModule
  ],
  controllers: [AuthController],
  providers: [LocalUserStrategy]
})
export class AuthModule {}
