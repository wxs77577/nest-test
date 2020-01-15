import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from 'nestjs-config'

@Module({
  imports: [],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
