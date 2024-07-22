import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { ExpenseRepository } from './repository/expense.repository';
import { MapperModule } from 'src/misc/mapper/mapper.module';

@Module({
  imports: [MapperModule],
  controllers: [ExpenseController],
  providers: [ExpenseService,ExpenseRepository],
  exports: [ExpenseService]
})
export class ExpenseModule {}
