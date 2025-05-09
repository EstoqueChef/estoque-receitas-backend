import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { RequestWithUser } from 'src/auth/jwt.strategy';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('receitas')
export class ReceitasController {

    constructor(
        private readonly receitasService: ReceitasService
    ) { }

    @Post()
    async create(
        @Body() data: CreateReceitaDto,
        @Req() req: RequestWithUser
    ) {
        const usuarioId = req.user.sub;
        return this.receitasService.create(data, usuarioId)
    }

    @Get()
    async findAll(@Req() req: RequestWithUser) {
        const usuarioId = req.user.sub;
        return this.receitasService.findAll(usuarioId)
    }

}
