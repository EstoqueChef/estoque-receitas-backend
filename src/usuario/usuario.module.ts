import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [UsuarioService, PrismaClient],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
