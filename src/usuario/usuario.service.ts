import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './create-usuario.dto';

@Injectable()
export class UsuarioService {

    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async criarUsuario(dto: CreateUsuarioDto) {
        const senhaHash = await bcrypt.hash(dto.senha, 10);
        return this.prismaService.usuario.create({
            data: {
                email: dto.email,
                senha: senhaHash,
                nome: dto.nome,
            },
        });
    }

    async buscarPorEmail(email: string) {
        return this.prismaService.usuario.findUnique({ where: { email } });
    }
}
