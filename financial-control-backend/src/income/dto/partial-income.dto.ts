import { ApiProperty, PartialType } from "@nestjs/swagger";
import { $Enums } from "@prisma/client";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUppercase } from "class-validator";

export class IncomeDto {
    @ApiProperty({
        description: 'Id gerado automaticamnte pelo sistema',
        example: 1,
      })
      @IsInt({ message: 'id must be a int' })
      @IsNotEmpty({ message: 'id must not be empty ' })
      id: number;

      @ApiProperty({
    description: 'Descoção da entrada',
    example: 'Premiação de junho'
    })
    @IsString({message: 'description must be a string'})
    @IsNotEmpty({message: 'description must not be empty'})
    description: string
    
    @ApiProperty({
        description: 'Valor da entrada',
        example: 152.65
    })
    @IsNumber({allowInfinity: false, allowNaN: false})
    @IsNotEmpty({message: 'amount must not be empty'})
    amount: number
    
    @ApiProperty({
        description: 'Categoria da entrada',
        example: 'SALARY'
    })
    category: $Enums.IncomeCategory

    
}

export class PartialIncomeDto extends PartialType(IncomeDto) {}