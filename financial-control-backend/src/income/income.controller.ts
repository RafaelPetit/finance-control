import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { IncomeService } from './income.service';
import { ApiResponse } from '@nestjs/swagger';
import { Income } from '@prisma/client';
import { CreateIncomeDto } from './dto/create-income.dto';
import { PartialIncomeDto } from './dto/partial-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('income')
export class IncomeController {
    constructor(private readonly incomeService: IncomeService){}

    @UseGuards(AuthGuard)
    @Post()
    @ApiResponse({
    description: 'create a new Income',
    type: "<Income>",
  })
    async create(@Body() userDto: CreateIncomeDto): Promise<CreateIncomeDto> {
        const data =  this.incomeService.create(userDto);

        return data
    }

    @UseGuards(AuthGuard)
    @Get("/all")
      @ApiResponse({
        type: "<Income[]>",
        description: 'Return all Incomes'
      })
      async findAll() :Promise<Income[]>{
        return await this.incomeService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get("/monthlyTotalAmount")
      @ApiResponse({
        type: "<number>",
        description: 'Return the total amount of the month'
      })
      async findTotal() :Promise<number>{
        return await this.incomeService.findMonthlyTotalAmount()
    }

    @UseGuards(AuthGuard)
    @Get()
    @ApiResponse({
      type: "<Income>",
      description: 'Find one Income',
    })
    async findOne(
      @Body() search: PartialIncomeDto,
    ): Promise<Income> {
      return  await this.incomeService.findOne(search)
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiResponse({
      type: "<Income>",
      description: 'Modify a Income',
    })
    async update(
      @Param('id') id: number,
      @Body() updateIncomeDto: UpdateIncomeDto,
    ): Promise<Income> {
      const data = await this.incomeService.update(
        +id,
        updateIncomeDto,
      );
      return data
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiResponse({
      type: "<Income>",
      description: 'Delete one Income',
    })
    async delete(
      @Param('id') id: number,
    ): Promise<Income> {
      const data = await this.incomeService.delete(+id);
      return data
    }
}
