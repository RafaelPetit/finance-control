import { Module } from '@nestjs/common';
import { IncomeController } from './income.controller';
import { IncomeService } from './income.service';
import { MapperModule } from 'src/misc/mapper/mapper.module';
import { IncomeRepository } from './repository/income.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MapperModule, AuthModule],
  controllers: [IncomeController],
  providers: [IncomeService, IncomeRepository],
  exports: [IncomeService]
})
export class IncomeModule {}
