import { $Enums,  } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUppercase } from 'class-validator';
export class CreateExpenseDto {
    @ApiProperty({
        description: 'Descrição da saida',
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

    @ApiProperty({
        description: 'usuario relacionada a essa saida',
        example: 1,
      })
      @IsNotEmpty({message: 'userId must not be empty'})
      @IsNumber({allowInfinity: false, allowNaN: false})
    userId: number

    @ApiProperty({
        enum: ['ACTIVE', 'INACTIVE'],
        enumName: '$Enums.Status',
        description: 'Status do expense',
      })
    @IsUppercase({ message: 'status must bem upperCase' })
    @IsString({ message: 'status must be a string' })
    @IsNotEmpty({ message: 'Status must not be empty' })
    status: $Enums.Status;
}