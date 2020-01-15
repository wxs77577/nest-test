import { prop, Ref } from '@typegoose/typegoose';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Group } from './group.model';

export class User {
  @ApiProperty({})
  @IsNotEmpty({})
  @prop()
  username: string;

  @ApiProperty({})
  @prop({
    select: false,
    get(val) {
      return val;
    },
    set(val) {
      return val && hashSync(val);
    },
  })
  password: string;

  @prop({ ref: 'Group' })
  group: Ref<Group>;
}
