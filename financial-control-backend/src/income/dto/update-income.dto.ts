import { ApiProperty } from "@nestjs/swagger"
import { $Enums } from "@prisma/client"
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUppercase } from "class-validator"
import { PartialIncomeDto } from "./partial-income.dto"

export class UpdateIncomeDto implements PartialIncomeDto{
    @ApiProperty({
        description: 'Descoção da entrada',
        example: 'Premiação de junho'
    })
    @IsString({message: 'description must be a string'})
    @IsNotEmpty({message: 'description must not be empty'})
    description?: string
    
    @ApiProperty({
        description: 'Valor da entrada',
        example: 152.65
    })
    @IsNumber({allowInfinity: false, allowNaN: false})
    @IsNotEmpty({message: 'amount must not be empty'})
    amount?: number
    
    @ApiProperty({
        description: 'Categoria da entrada',
        example: 'SALARY'
    })
    category?: $Enums.IncomeCategory
    
    @ApiProperty({
        enum: ['ACTIVE', 'INACTIVE'],
        enumName: '$Enums.Status',
        description: 'Status do Income',
      })
    @IsUppercase({ message: 'status must bem upperCase' })
    @IsString({ message: 'status must be a string' })
    @IsNotEmpty({ message: 'Status must not be empty' })
    @IsOptional()
    status?: $Enums.Status;
}
