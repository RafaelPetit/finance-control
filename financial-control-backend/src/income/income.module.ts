import { Module } from '@nestjs/common';
import { IncomeController } from './income.controller';
import { IncomeService } from './income.service';
import { MapperModule } from 'src/misc/mapper/mapper.module';
import { IncomeRepository } from './repository/income.repository';

@Module({
  imports: [MapperModule],
  controllers: [IncomeController],
  providers: [IncomeService, IncomeRepository],
  exports: [IncomeService]
})
export class IncomeModule {}
