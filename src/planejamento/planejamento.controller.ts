import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PlanejamentoService } from './planejamento.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CreatePlanejamentoDto } from './dto/create-planejamento.dto';
import { RequestWithUser } from 'src/auth/jwt.strategy';

@UseGuards(JwtAuthGuard)
@Controller('planejamento')
export class PlanejamentoController {
    
    constructor(
        private readonly planejamentoService: PlanejamentoService
    ){}

    @Post()
  async criar(@Body() dto: CreatePlanejamentoDto, @Req() req: RequestWithUser) {
    return this.planejamentoService.criarPlanejamento(dto, req.user.sub);
  }

}
