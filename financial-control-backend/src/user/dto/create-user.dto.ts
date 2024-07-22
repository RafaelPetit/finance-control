import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @ApiProperty({
        description: 'nome do usuario',
        example: 'Rafael'
    })
    @IsString({message: 'name must be a string'})
    @IsNotEmpty({message: 'name must not be empty'})
    name:      string

    @ApiProperty({
        description: 'email do usuário',
        example: 'teste@gmail.com'
    })
    @IsEmail()
    @IsNotEmpty({message: 'email must not be empty'})
    email:     string
    
    @ApiProperty({
        description: 'senha do usuário',
        example: 'sd2$#2ansii3'
    })
    password:  string
}