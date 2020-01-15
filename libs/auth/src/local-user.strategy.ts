import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local'
import { ReturnModelType } from "@typegoose/typegoose";
import { User } from "libs/db/src/models/user.model";
import { InjectModel } from "nestjs-typegoose";
import { compareSync } from "bcryptjs";
import { LOCAL_USER_STRATEGY } from "./constants";

@Injectable()
export class LocalUserStrategy extends PassportStrategy(Strategy, LOCAL_USER_STRATEGY) {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>
  ) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.model.findOne({ username }).select('+password')
    if (!user) {
      throw new UnauthorizedException('用户不存在')
    }
    console.log(password, user)
    if (!compareSync(String(password), String(user.password))) {
      throw new UnauthorizedException('密码不正确')
    }
    return user
  }
}