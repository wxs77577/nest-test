
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from 'libs/db/src';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@libs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { JwtModule } from '@nestjs/jwt';
import * as path from 'path'

const configPath = path.resolve('config', '**/!(*.d).{ts,js}')
console.log(configPath)

@Module({
  imports: [
    ConfigModule.load(configPath),

    JwtModule.registerAsync({
      useFactory(config: ConfigService) {
        return { secret: config.get('app.secret') }
      },
      inject: [ConfigService]
    }),
    CommonModule,
    DbModule,
    // AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
