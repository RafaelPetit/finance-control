import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateIncomeDto } from './dto/create-income.dto';
import { ClassConstructor } from 'class-transformer';
import { MapperService } from 'src/misc/mapper/mapper.service';
import { Income } from '@prisma/client';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { IncomeRepository } from './repository/income.repository';
import { filterByMonth } from 'src/misc/helpers/filterByMonth.helper';

@Injectable()
export class IncomeService {
  constructor(
    private readonly incomeRepository: IncomeRepository,
    private readonly mapperService: MapperService
  ){}
  private readonly entity: ClassConstructor<Income>;

  async create(createIncomeDto: CreateIncomeDto): Promise<CreateIncomeDto>{
    try {
        const toEntity =  this.mapperService.toEntity(createIncomeDto, this.entity, "ACTIVE",);
        return this.incomeRepository.create(toEntity)
    }
    catch(e) {
      throw new Error(e)
    }
  }

  async findAll(): Promise<Income[]> {
    const result = await this.incomeRepository.findAll();

    if (!result || null) {
      throw new NotFoundException('No active incomes found');
    }

    return result;
  }

  async findMonthlyTotalAmount(): Promise<number> {
    const allProducts = await this.incomeRepository.findAll()
    const currentMonthExpenses  = await filterByMonth(allProducts);
    return currentMonthExpenses.reduce((total, item) => total + item.amount, 0);
  }

  async findOne(search: Partial<Income>): Promise<Income> {
    if (Object.keys(search).length === 0) {
      throw new BadRequestException(
        'At least one search parameter must be provided',
      );
    }

    const data = await this.incomeRepository.findOne(search);

    if (!data || null) {
      throw new NotFoundException("Income doesn't exist or is inactive");
    }

    return data;
  }

  async update(
    id: number,
    updateIncomeDto: UpdateIncomeDto,
  ): Promise<Income> {
    try {
      const updatedIncome = await this.incomeRepository.update(
        +id,
        updateIncomeDto,
      );
      return updatedIncome;
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(id: number,): Promise<Income> {
    try {
      return await this.incomeRepository.delete(+id);
    } catch (e) {
      throw new Error(e);
    }
  }
}
