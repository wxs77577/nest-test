import { prop, Ref } from '@typegoose/typegoose'
import { User } from './user.model'

export class Group {
  @prop()
  title: string

  @prop({ ref: 'User' })
  user: Ref<User>
}