import { Controller, Post, Body, Get, Req, Query, UseGuards } from '@nestjs/common';
import { InsumosService } from './insumos.service';
import { CreateInsumoDto } from './create-insumo.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RequestWithUser } from '../auth/jwt.strategy';

@UseGuards(JwtAuthGuard) 
@Controller('insumos')
export class InsumosController {
  constructor(private readonly insumosService: InsumosService) {}

  @Post()
  async create(@Body() dto: CreateInsumoDto, @Req() req: RequestWithUser) {
    const usuarioId = req.user.sub;
    return this.insumosService.create(dto, usuarioId);
  }

  @Get()
  async findAll(@Req() req: RequestWithUser, @Query('filtro') filtro?: string) {
    const usuarioId = req.user.sub;
    return this.insumosService.findAll(usuarioId, filtro);
  }
}
