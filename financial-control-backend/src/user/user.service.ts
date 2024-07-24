import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { MapperService } from 'src/misc/mapper/mapper.service';
import { ClassConstructor } from 'class-transformer';
import { User } from '@prisma/client';
import { UserRepository } from './repository/user.respository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly mapperService: MapperService
      ){}
      private readonly entity: ClassConstructor<User>;

    
    async create(createUserDto: CreateUserDto): Promise<CreateUserDto>{
        try {
            const hashPassword = await bcrypt.hash(createUserDto.password, 10);
            const toEntity =  this.mapperService.toEntity(createUserDto, this.entity);
            return this.userRepository.create(toEntity)
        }
        catch(e) {
          throw new Error(e)
        }
      }

      async findByEmail (email: string) :Promise<User> {
        return await this.userRepository.findByEmail(email)
      }
}
