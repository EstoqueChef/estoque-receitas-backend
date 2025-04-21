import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsuarioModule } from '../usuario/usuario.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'sua_chave_secreta',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
