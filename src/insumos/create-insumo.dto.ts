import { IsString, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { UnidadeMedida } from '@prisma/client';

export class CreateInsumoDto {
  @IsString()
  nome: string;

  @IsEnum(UnidadeMedida)
  unidade: UnidadeMedida;

  @IsNumber()
  quantidade: number;

  @IsOptional()
  validade?: Date;
}
