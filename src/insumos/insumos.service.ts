import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { MovimentacaoDto } from './dto/movimentacao.dto';
import { FilterInsumoDto } from './dto/filter-insumo.dto';

@Injectable()
export class InsumosService {
  constructor(private prisma: PrismaService) { }

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

  async findAll(usuarioId: string, filtros: FilterInsumoDto) {
    const {
      filtro,
      validadeExpirada,
      ordenarPor = 'nome',
      ordem = 'asc',
    } = filtros

    const hoje = new Date();
    const limiteValidade = new Date();
    limiteValidade.setDate(hoje.getDate() + 7)
    
    return this.prisma.insumo.findMany({
      where: {
        usuarioId,
        nome: filtro ? { contains: filtro, mode: 'insensitive'} : undefined,
        validade: validadeExpirada == 'true' ? { lte: limiteValidade} : undefined
      },
      orderBy: {
        [ordenarPor]: ordem
      }
    })
  }

  async updateMovimentacao(insumoId: string, usuarioId: string, data: MovimentacaoDto) {
    const insumo = await this.prisma.insumo.findUnique({
      where: {
        id: insumoId
      }
    })

    if (!insumo) {
      throw new NotFoundException("Insumo não encontrado");
    }

    let novaQuantidade = insumo.quantidade;

    if (data.tipo == 'ENTRADA') {
      novaQuantidade += data.quantidade;
    } else if (data.tipo == 'SAIDA') {

      if (insumo.quantidade < data.quantidade) {
        throw new BadRequestException("Estoque insuficiente para saída")
      }

      novaQuantidade -= data.quantidade
    }

    await this.prisma.insumo.update({
      where: { id: insumoId },
      data: { quantidade: novaQuantidade }
    });

    return this.prisma.estoqueHistorico.create({
      data: {
        insumoId,
        usuarioId,
        tipo: data.tipo,
        quantidade: data.quantidade
      }
    })
  }

  async getHistorico(insumoId: string, usuarioId: string) {
    return this.prisma.estoqueHistorico.findMany({
      where: {
        insumoId,
        usuarioId
      },
      orderBy: { dataHora: 'desc' },
      include: {
        usuario: {
          select: { nome: true, email: true }
        }
      }

    })
  }
}
