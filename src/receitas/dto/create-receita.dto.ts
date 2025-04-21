import { IsString, IsOptional, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { ReceitaInsumoDto } from './receita-insumo.dto';

export class CreateReceitaDto {
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @ArrayMinSize(1, { message: 'A receita deve ter pelo menos um insumo' })
  @ValidateNested({ each: true })
  @Type(() => ReceitaInsumoDto)
  insumos: ReceitaInsumoDto[];
}
