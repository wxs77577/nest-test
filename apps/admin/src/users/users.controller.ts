import { Controller, Post, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { User } from 'libs/db/src/models/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { Request } from 'express';

@Crud({
  model: User,
  routes: {
    create:{
      decorators: [
        
      ]
    }
  },
  config(req: Request) {
    console.log(req.user)
    return {
      option: {
        title: '用户管理',
        column: [
          { prop: 'username', label: '用户名' }
        ]
      }
    }
  }
})
@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User) private model
  ) { }
}
