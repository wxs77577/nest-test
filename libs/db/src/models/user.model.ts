import { prop, Ref } from '@typegoose/typegoose'
import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'
import { hashSync } from 'bcryptjs'
import { Group } from './group.model'

export class User {
  @ApiModelProperty({ required: true })
  @IsNotEmpty({})
  @prop()
  username: string

  @ApiModelProperty({ required: false })
  @prop({
    select: false,
    get(val) {
      return val
    },
    set(val) {
      return val && hashSync(val)
    }
  })
  password: string

  @prop({ ref: "Group" })
  group: Ref<Group>
}