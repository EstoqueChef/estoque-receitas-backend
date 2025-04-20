import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsumosModule } from './insumos/insumos.module';
import { ReceitasModule } from './receitas/receitas.module';
import { ProducaoModule } from './producao/producao.module';
import { ComprasModule } from './compras/compras.module';
import { ValidadeModule } from './validade/validade.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [InsumosModule, ReceitasModule, ProducaoModule, ComprasModule, ValidadeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
