import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsumosModule } from './insumos/insumos.module';
import { ReceitasModule } from './receitas/receitas.module';
import { ProducaoModule } from './producao/producao.module';
import { ComprasModule } from './compras/compras.module';
import { ValidadeModule } from './validade/validade.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [InsumosModule, ReceitasModule, ProducaoModule, ComprasModule, ValidadeModule, AuthModule, PrismaModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
