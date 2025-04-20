import { Module } from '@nestjs/common';
import { ValidadeService } from './validade.service';
import { ValidadeController } from './validade.controller';

@Module({
  providers: [ValidadeService],
  controllers: [ValidadeController]
})
export class ValidadeModule {}
