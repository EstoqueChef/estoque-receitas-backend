import { Module } from '@nestjs/common';
import { ProducaoService } from './producao.service';
import { ProducaoController } from './producao.controller';

@Module({
  providers: [ProducaoService],
  controllers: [ProducaoController]
})
export class ProducaoModule {}
