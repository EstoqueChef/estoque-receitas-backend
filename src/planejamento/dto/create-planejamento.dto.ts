import { IsArray, ValidateNested, IsString, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

class ReceitaPlanejadaDto {
  @IsString()
  receitaId: string;

  @IsInt()
  @Min(1)
  quantidadePlanejada: number;
}

export class CreatePlanejamentoDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceitaPlanejadaDto)
  receitas: ReceitaPlanejadaDto[];
}
