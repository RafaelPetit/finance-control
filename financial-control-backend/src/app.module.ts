import { Module } from '@nestjs/common';
import { IncomeModule } from './income/income.module';
import { IncomeRepository } from './income/income.Repository';
import { PrismaModule } from './misc/prisma/prisma.module';

@Module({
  imports: [IncomeModule,PrismaModule],
  providers: [IncomeRepository],
})
export class AppModule {}
