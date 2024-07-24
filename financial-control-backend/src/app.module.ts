import { Module } from '@nestjs/common';
import { IncomeModule } from './income/income.module';
import { PrismaModule } from './misc/prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserRepository } from './user/repository/user.respository';
import { IncomeRepository } from './income/repository/income.repository';
import { ExpenseModule } from './expense/expense.module';
import { ExpenseRepository } from './expense/repository/expense.repository';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [IncomeModule,PrismaModule, UserModule, ExpenseModule, AuthModule],
  providers: [IncomeRepository, UserRepository, ExpenseRepository],
})
export class AppModule {}
