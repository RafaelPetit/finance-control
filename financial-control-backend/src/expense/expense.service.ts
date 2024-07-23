import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ExpenseRepository } from './repository/expense.repository';
import { MapperService } from 'src/misc/mapper/mapper.service';
import { Expense } from '@prisma/client';
import { ClassConstructor } from 'class-transformer';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Paginated } from 'src/misc/interface/output.interface';
import { Pageable } from 'src/misc/interface/input.interface';

@Injectable()
export class ExpenseService {
    constructor(
        private readonly expenseRepository: ExpenseRepository,
        private readonly mapperService: MapperService
      ){}
      private readonly entity: ClassConstructor<Expense>;
    
      async create(createExpenseDto: CreateExpenseDto): Promise<CreateExpenseDto>{
        try {
            const toEntity =  this.mapperService.toEntity(createExpenseDto, this.entity, "ACTIVE",);
            return this.expenseRepository.create(toEntity)
        }
        catch(e) {
          throw new Error(e)
        }
      }
    
      async findAll(pagination: Pageable): Promise<Paginated<Expense>> {
        const result = await this.expenseRepository.findAll(pagination);
    
        if (!result || null) {
          throw new NotFoundException('No active expenses found');
        }
    
        return result;
      }
    
      async findOne(search: Partial<Expense>): Promise<Expense> {
        if (Object.keys(search).length === 0) {
          throw new BadRequestException(
            'At least one search parameter must be provided',
          );
        }
    
        const data = await this.expenseRepository.findOne(search);
    
        if (!data || null) {
          throw new NotFoundException("Expense doesn't exist or is inactive");
        }
    
        return data;
      }
    
      async update(
        id: number,
        updateExpenseDto: UpdateExpenseDto,
      ): Promise<Expense> {
        try {
          const updatedExpense = await this.expenseRepository.update(
            +id,
            updateExpenseDto,
          );
          return updatedExpense;
        } catch (e) {
          throw new Error(e);
        }
      }
    
      async delete(id: number,): Promise<Expense> {
        try {
          return await this.expenseRepository.delete(+id);
        } catch (e) {
          throw new Error(e);
        }
      }
}
