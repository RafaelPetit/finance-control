import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MapperService } from 'src/misc/mapper/mapper.service';
import { MapperModule } from 'src/misc/mapper/mapper.module';
import { UserRepository } from './repository/income.respository';

@Module({
  imports: [MapperModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})
export class UserModule {}
