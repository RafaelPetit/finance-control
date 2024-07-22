import { ApiProperty } from "@nestjs/swagger"
import { $Enums } from "@prisma/client"
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUppercase } from "class-validator"
import { PartialExpenseDto } from "./partial-expense.dto"

export class UpdateExpenseDto implements PartialExpenseDto{
    @ApiProperty({
        description: 'Descoção da saida',
        example: 'Premiação de junho'
    })
    @IsString({message: 'description must be a string'})
    @IsNotEmpty({message: 'description must not be empty'})
    description?: string
    
    @ApiProperty({
        description: 'Valor da saida',
        example: 152.65
    })
    @IsNumber({allowInfinity: false, allowNaN: false})
    @IsNotEmpty({message: 'amount must not be empty'})
    amount?: number
    
    @ApiProperty({
        description: 'Categoria da saida',
        example: 'SALARY'
    })
    category?: $Enums.ExpenseCategory
    
    @ApiProperty({
        enum: ['ACTIVE', 'INACTIVE'],
        enumName: '$Enums.Status',
        description: 'Status do expense',
      })
    @IsUppercase({ message: 'status must bem upperCase' })
    @IsString({ message: 'status must be a string' })
    @IsNotEmpty({ message: 'Status must not be empty' })
    @IsOptional()
    status?: $Enums.Status;
}
