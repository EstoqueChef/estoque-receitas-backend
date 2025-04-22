import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlanejamentoDto } from './dto/create-planejamento.dto';

@Injectable()
export class PlanejamentoService {

    constructor(
        private readonly prisma: PrismaService
    ) { }

    async criarPlanejamento(data: CreatePlanejamentoDto, usuarioId: string) {
        if (!data.receitas.length) {
            throw new BadRequestException('É necessário fornecer pelo menos uma receita.');
        }

        const receitas = await this.prisma.receita.findMany({
            where: {
                id: { in: data.receitas.map(r => r.receitaId) },
                usuarioId
            },
            include: {
                insumos: true
            }
        })

        if (receitas.length !== data.receitas.length) {
            throw new BadRequestException('Uma ou mais receitas são inválidas ou não pertencem ao usuário.');
        }

        const totalInsumos: Record<string, number> = {};

        for (const receita of receitas) {
            const plano = data.receitas.find(r => r.receitaId === receita.id)
            for (const insumo of receita.insumos) {
                const total = insumo.quantidade * plano!.quantidadePlanejada;
                totalInsumos[insumo.insumoId] = (totalInsumos[insumo.insumoId] || 0) + total;
            }
        }

        const insumos = await this.prisma.insumo.findMany({
            where: {
                id: { in: Object.keys(totalInsumos) },
                usuarioId
            }
        })

        const resultado = insumos.map(insumo => {
            const quantidadeNecessaria = totalInsumos[insumo.id];
            const quantidadeEstoque = insumo.quantidade;
            const faltando = Math.max(0, quantidadeNecessaria - quantidadeEstoque);

            return {
                insumoId: insumo.id,
                nome: insumo.nome,
                unidade: insumo.unidade,
                quantidadeNecessaria,
                quantidadeEstoque,
                faltando,
                status: faltando > 0 ? 'faltante' : 'suficiente'
            }
        })

        const planejamento = await this.prisma.planejamentoProducao.create({
            data: {
                usuarioId,
                receitas: {
                    create: data.receitas.map(r => ({
                        receitaId: r.receitaId,
                        quantidadePlanejada: r.quantidadePlanejada
                    }))
                }
            }
        })

        return {
            planejamentoId: planejamento.id,
            insumosCalculados: resultado,
        };
    }
}
