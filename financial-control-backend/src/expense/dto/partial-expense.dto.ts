import { ApiProperty, PartialType } from "@nestjs/swagger";
import { $Enums } from "@prisma/client";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUppercase } from "class-validator";

export class ExpenseDto {
    @ApiProperty({
        description: 'Id gerado automaticamnte pelo sistema',
        example: 1,
      })
      @IsInt({ message: 'id must be a int' })
      @IsNotEmpty({ message: 'id must not be empty ' })
      id: number;

      @ApiProperty({
    description: 'Descoção da saida',
    example: 'Premiação de junho'
    })
    @IsString({message: 'description must be a string'})
    @IsNotEmpty({message: 'description must not be empty'})
    description: string
    
    @ApiProperty({
        description: 'Valor da saida',
        example: 152.65
    })
    @IsNumber({allowInfinity: false, allowNaN: false})
    @IsNotEmpty({message: 'amount must not be empty'})
    amount: number
    
    @ApiProperty({
        description: 'Categoria da saida',
        example: 'SALARY'
    })
    category: $Enums.ExpenseCategory

    
}

export class PartialExpenseDto extends PartialType(ExpenseDto) {}