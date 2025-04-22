import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReceitaDto } from './dto/create-receita.dto';

@Injectable()
export class ReceitasService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(data: CreateReceitaDto, usuarioId: string) {

    const insumosIds = data.insumos.map(i => i.insumoId);
    const insumos = await this.prisma.insumo.findMany({
      where: {
        id: { in: insumosIds },
        usuarioId
      }
    })

    if (insumos.length !== data.insumos.length) {
      throw new BadRequestException('Um ou mais insumos são inválidos ou não pertencem ao usuário');
    }

    return this.prisma.receita.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        usuarioId,
        insumos: {
          create: data.insumos.map(insumo => ({
            insumoId: insumo.insumoId,
            quantidade: insumo.quantidade
          }))
        }
      },
      include: {
        insumos: {
          include: {
            insumo: true
          }
        }
      }
    })
  }


  async findAll(usuarioId: string) {

    return this.prisma.receita.findMany({
      where: { usuarioId },
      include: {
        insumos: {
          include: {
            insumo: true
          }
        }
      },
      orderBy: { nome: 'asc' }
    })
  }
}
