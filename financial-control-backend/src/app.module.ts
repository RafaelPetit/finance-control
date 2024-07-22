import { Module } from '@nestjs/common';
import { IncomeModule } from './income/income.module';
import { PrismaModule } from './misc/prisma/prisma.module';
import { IncomeRepository } from './income/repository/income.repository';

@Module({
  imports: [IncomeModule,PrismaModule],
  providers: [IncomeRepository],
})
export class AppModule {}
