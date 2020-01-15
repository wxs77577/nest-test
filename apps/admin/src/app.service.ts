import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class AppService {
  constructor(
    // @InjectModel(Group) private readonly model: ReturnModelType<any>
  ){}
  async getHello() {
    return 'hello'
    // return await this.model.find().limit(3)
  }
}
