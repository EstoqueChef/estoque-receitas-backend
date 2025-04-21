import { IsString, IsEnum, IsNumber } from 'class-validator';
import { TipoMovimentacao } from '@prisma/client';

export class MovimentacaoDto {
  @IsEnum(TipoMovimentacao)
  tipo: TipoMovimentacao;

  @IsNumber()
  quantidade: number;

  @IsString()
  usuarioId: string;
}
