import * as dotenv from 'dotenv'
dotenv.config()
import { NestFactory } from '@nestjs/core';
import { AppModule as AdminAppModule } from 'apps/admin/src/app.module';
import { AppModule as WebAppModule } from 'apps/app/src/app.module';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express'
import * as express from 'express'


async function bootstrap() {
  const server = express()
  const adapter = new ExpressAdapter(server)
  // const app = await NestFactory.create(AppModule, new ExpressAdapter(server))
  const admin = await NestFactory.create(AdminAppModule, adapter);
  const web = await NestFactory.create(WebAppModule, adapter);

  admin.setGlobalPrefix('/admin')
  web.setGlobalPrefix('/web')

  // await app.init()
  await admin.init()
  await web.init()

  await adapter.listen(3009);
  console.log('http://localhost:3009')
}
bootstrap();
