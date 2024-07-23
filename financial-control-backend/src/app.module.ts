import { Module } from '@nestjs/common';
import { IncomeModule } from './income/income.module';
import { PrismaModule } from './misc/prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserRepository } from './user/repository/income.respository';
import { IncomeRepository } from './income/repository/income.repository';
import { ExpenseModule } from './expense/expense.module';
import { ExpenseRepository } from './expense/repository/expense.repository';

@Module({
  imports: [IncomeModule,PrismaModule, UserModule, ExpenseModule],
  providers: [IncomeRepository, UserRepository, ExpenseRepository],
})
export class AppModule {}
