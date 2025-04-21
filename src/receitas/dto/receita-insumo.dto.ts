import { IsString, IsNumber } from 'class-validator';

export class ReceitaInsumoDto {
  @IsString()
  insumoId: string;

  @IsNumber()
  quantidade: number;
}
