import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    @ApiResponse({
    type: "<CreateUserDto>",
    description: 'cadastra novos usuarios',
  })
    async create(@Body() userDto: CreateUserDto): Promise<CreateUserDto> {
      return this.userService.create(userDto);
}
}
