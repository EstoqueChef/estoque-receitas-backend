import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.buscarPorEmail(email);
  
    if (!user) {
      console.warn(`Usuário com email ${email} não encontrado`);
      return null;
    }
  
    if (!user.senha || !password) {
      console.error(`Senha não definida no banco ou no payload:`, {
        senhaDoBanco: user.senha,
        senhaRecebida: password,
      });
      return null;
    }
  
    const senhaValida = await bcrypt.compare(password, user.senha);
    if (senhaValida) {
      const { senha, ...resto } = user;
      return resto;
    }
  
    return null;
  }
  

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
