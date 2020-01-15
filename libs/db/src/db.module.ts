import { Module, Global } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Group } from './models/group.model';
import { ConfigService } from 'nestjs-config';

const models = TypegooseModule.forFeature([
  User,
  Group
])

@Global()
@Module({
  imports: [

    TypegooseModule.forRootAsync({
      inject:[ConfigService],
      useFactory(config:ConfigService){
        return {
          uri: config.get('app.db'),
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        }
      }
    }),
    models
  ],
  providers: [
  ],
  exports: [
    TypegooseModule
  ],
})
export class DbModule { }
