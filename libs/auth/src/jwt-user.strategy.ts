import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, StrategyOptions } from "passport-jwt";
import { InjectModel } from "nestjs-typegoose";
import { User } from "libs/db/src/models/user.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { JWT_USER_STRATEGY } from "./constants";

@Injectable()
export class JwtUserStrategy extends PassportStrategy(Strategy, JWT_USER_STRATEGY) {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>,
  ){
    super({
      secretOrKey: process.env.SECRET,
    } as StrategyOptions);
  }

  async validate(id:string){
    return await this.model.findById(id)
  }
}