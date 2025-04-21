import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInsumoDto } from './create-insumo.dto';

@Injectable()
export class InsumosService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateInsumoDto, usuarioId: string) {
    const existe = await this.prisma.insumo.findFirst({
      where: {
        nome: dto.nome,
        usuarioId,
      },
    });

    if (existe) throw new BadRequestException('Já existe um insumo com esse nome');

    return this.prisma.insumo.create({
      data: {
        ...dto,
        usuarioId,
      },
    });
  }

  async findAll(usuarioId: string, filtro?: string) {
    return this.prisma.insumo.findMany({
      where: {
        usuarioId,
        nome: filtro ? { contains: filtro, mode: 'insensitive' } : undefined,
      },
      orderBy: { nome: 'asc' },
    });
  }
}
