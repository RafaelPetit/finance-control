import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MapperService } from 'src/misc/mapper/mapper.service';
import { MapperModule } from 'src/misc/mapper/mapper.module';
import { UserRepository } from './repository/user.respository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MapperModule, forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})
export class UserModule {}
