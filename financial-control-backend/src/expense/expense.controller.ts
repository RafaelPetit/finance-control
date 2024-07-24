import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Expense } from '@prisma/client';
import { ControllerOutput, ControllerPaginatedOutput } from 'src/misc/interface/output.interface';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { PartialExpenseDto } from './dto/partial-expense.dto';
import { Pageable } from 'src/misc/interface/input.interface';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ExpenseService } from './expense.service';

@Controller('expense')
export class ExpenseController {
    constructor(private readonly expenseService: ExpenseService){}

    @Post()
    @ApiResponse({
    description: 'create new user',
    type: ControllerOutput<Expense>,
  })
    async create(@Body() userDto: CreateExpenseDto): Promise<ControllerOutput> {
        const data =  this.expenseService.create(userDto);

        return {
        data,
        error: null,
        };
    }

    @Get("/total")
    @ApiResponse({
      type:ControllerOutput<Expense>,
      description: 'Return the total amount'
    })
    async findTotal() :Promise<number>{
      return this.expenseService.findTotal()
    }

    @Get("/totalCreditCard")
    @ApiResponse({
      type:ControllerOutput<Expense>,
      description: 'Return the total Credit Card amount'
    })
    async findTotalCreditCard() : Promise<number>{
      return this.expenseService.findTotalCreditCard()
    }

  @Get('/all')
  @ApiResponse({
    type: ControllerPaginatedOutput<Expense>,
    description: 'Find all Expenses',
  })
  async findAll(
    @Body() pagination: Pageable,
  ): Promise<ControllerPaginatedOutput<Expense>> {
    return {
      data: await this.expenseService.findAll(pagination),
      error: null,
    };
  }

  @Get()
  @ApiResponse({
    type: ControllerOutput<Expense>,
    description: 'Find one Expense',
  })
  async findOne(
    @Body() search: PartialExpenseDto,
  ): Promise<ControllerOutput<Expense>> {
    return {
      data: await this.expenseService.findOne(search),
      error: null,
    };
  }

  @Patch(':id')
  @ApiResponse({
    type: ControllerOutput<Expense>,
    description: 'Modify a Expense',
  })
  async update(
    @Param('id') id: number,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ): Promise<ControllerOutput<Expense>> {
    const data = await this.expenseService.update(
      +id,
      updateExpenseDto,
    );
    return { data, error: null };
  }

  @Delete(':id')
  @ApiResponse({
    type: ControllerOutput<Expense>,
    description: 'Delete one Expense',
  })
  async delete(
    @Param('id') id: number,
  ): Promise<ControllerOutput<Expense>> {
    const data = await this.expenseService.delete(+id,);
    return { data, error: null };
  }
}
