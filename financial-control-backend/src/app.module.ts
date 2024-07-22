import { Module } from '@nestjs/common';
import { IncomeModule } from './income/income.module';
import { PrismaModule } from './misc/prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserRepository } from './user/repository/income.respository';
import { IncomeRepository } from './income/repository/income.repository';

@Module({
  imports: [IncomeModule,PrismaModule, UserModule],
  providers: [IncomeRepository, UserRepository],
})
export class AppModule {}
