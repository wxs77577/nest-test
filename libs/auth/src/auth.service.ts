import { Injectable, Inject } from '@nestjs/common';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('JwtService') private jwtService: JwtService
  ){}

  login(user: DocumentType<{}>) {
    return this.jwtService.sign(String(user._id))
  }
}
