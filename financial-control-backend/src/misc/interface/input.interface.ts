// src/dto/pageable.dto.ts
import { ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import { $Enums, Status } from '@prisma/client';
import { IsEnum, IsInt, IsOptional, IsString, isEnum } from 'class-validator';

export class Pageable<T = Record<string, any>> {
  @ApiProperty({
    description: 'Número da página a ser recuperada',
    example: 1,
    default: 1,
  })
  @IsInt()
  @IsOptional()
  page?: number;

  @ApiProperty({
    description: 'Número de itens por página',
    example: 10,
    default: 10,
  })
  @IsInt()
  @IsOptional()
  itemsPerPage?: number;

  @ApiPropertyOptional({
    description: 'Campo pelo qual os resultados devem ser ordenados',
    example: 'name',
  })
  @IsOptional()
  @IsString()
  sortBy?: keyof T;

  @ApiPropertyOptional({
    description: 'Status a serem recuperados',
    enum: Status,
    example: Status.ACTIVE,
  })
  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}

export type Update<T> = Partial<Omit<T, 'id'>>;
