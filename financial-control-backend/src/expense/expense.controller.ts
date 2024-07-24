import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Expense } from '@prisma/client';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { PartialExpenseDto } from './dto/partial-expense.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ExpenseService } from './expense.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('expense')
export class ExpenseController {
    constructor(private readonly expenseService: ExpenseService){}

    @Post()
    @ApiResponse({
    description: 'create new Expense',
    type: "<Expense>",
  })
    async create(@Body() userDto: CreateExpenseDto): Promise<CreateExpenseDto> {
      return await this.expenseService.create(userDto);
    }

    @Get("/all")
    @ApiResponse({
      type: "number",
      description: 'Return all Expenses'
    })
    async findAll() :Promise<Expense[]>{
      return await this.expenseService.findAll()
    }

    @Get("/monthlyTotalAmount")
    @ApiResponse({
      type: "number",
      description: 'Return the total amount of the month'
    })
    async findMonthTotalAmount() : Promise<number>{
      return await this.expenseService.findMonthlyTotalAmount()
    }

    @Get("/monthlyCreditCardTotalAmount")
    @ApiResponse({
      type: "number",
      description: 'Return the total Credit Card amount of the month'
    })
    async findMonthlyCreditCardTotalAmount() : Promise<number>{
      return await this.expenseService.findMonthlyCreditCardTotalAmount()
    }

    @Get()
    @ApiResponse({
      type: "<Expense>",
      description: 'Find one Expense',
    })
    async findOne(
      @Body() search: PartialExpenseDto,
    ): Promise<Expense> {
      return await this.expenseService.findOne(search)
    }

    @Patch(':id')
    @ApiResponse({
      type: "<Expense>",
      description: 'Modify a Expense',
    })
    async update(
      @Param('id') id: number,
      @Body() updateExpenseDto: UpdateExpenseDto,
    ): Promise<Expense> {
      const data = await this.expenseService.update(
        +id,
        updateExpenseDto,
      );
      return data;
    }

    @Delete(':id')
    @ApiResponse({
      type: "<Expense>",
      description: 'Delete one Expense',
    })
    async delete(
      @Param('id') id: number,
    ): Promise<Expense> {
      return await this.expenseService.delete(+id,);
    }
}
