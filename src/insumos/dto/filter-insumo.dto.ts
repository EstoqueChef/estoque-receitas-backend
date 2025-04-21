import { IsOptional, IsString, IsBooleanString, IsIn } from 'class-validator';

export class FilterInsumoDto {
  @IsOptional()
  @IsString()
  filtro?: string;

  @IsOptional()
  @IsBooleanString()
  validadeExpirada?: string;

  @IsOptional()
  @IsIn(['nome', 'validade'])
  ordenarPor?: 'nome' | 'validade';

  @IsOptional()
  @IsIn(['asc', 'desc'])
  ordem?: 'asc' | 'desc';
}
