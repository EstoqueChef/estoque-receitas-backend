import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './create-usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

    @Post()
    async criarUsuario(@Body() data: CreateUsuarioDto) {
        return await this.usuarioService.criarUsuario(data);
    }

    @Get(':email')
    async buscarPorEmail(@Param('email') email: string) {
        return await this.usuarioService.buscarPorEmail(email);
    }
}
