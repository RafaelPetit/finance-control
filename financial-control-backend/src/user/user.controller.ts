import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse } from '@nestjs/swagger';
import { ControllerOutput } from 'src/misc/interface/output.interface';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    @ApiResponse({
    description: 'cadastra novos usuarios',
    type: ControllerOutput<User>,
  })
    async create(@Body() userDto: CreateUserDto): Promise<ControllerOutput> {
        const data =  this.userService.create(userDto);
        return {
        data,
        error: null,
        };
    }
}
