import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { ExpenseRepository } from './repository/expense.repository';
import { MapperModule } from 'src/misc/mapper/mapper.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MapperModule, AuthModule],
  controllers: [ExpenseController],
  providers: [ExpenseService,ExpenseRepository],
  exports: [ExpenseService]
})
export class ExpenseModule {}
