import { Controller, Post, Body, Get, Req, Query, UseGuards, Put, Patch, Param } from '@nestjs/common';
import { InsumosService } from './insumos.service';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RequestWithUser } from '../auth/jwt.strategy';
import { MovimentacaoDto } from './dto/movimentacao.dto';
import { FilterInsumoDto } from './dto/filter-insumo.dto';

@UseGuards(JwtAuthGuard)
@Controller('insumos')
export class InsumosController {
  constructor(private readonly insumosService: InsumosService) { }

  @Post()
  async create(@Body() dto: CreateInsumoDto, @Req() req: RequestWithUser) {
    const usuarioId = req.user.sub;
    return this.insumosService.create(dto, usuarioId);
  }

  @Get()
  async findAll(@Req() req: RequestWithUser, @Query() filtros: FilterInsumoDto) {
    const usuarioId = req.user.sub;
    return this.insumosService.findAll(usuarioId, filtros);
  }

  @Patch(":id/movimentar")
  async movimentar(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
    @Body() data: MovimentacaoDto
  ) {
    const usuarioId = req.user.sub;
    return this.insumosService.updateMovimentacao(id, usuarioId, data)
  }

  @Get(':id/historico')
  async historico(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
  ) {
    const usuarioId = req.user.sub;
    return this.insumosService.getHistorico(id, usuarioId);
  }
}
