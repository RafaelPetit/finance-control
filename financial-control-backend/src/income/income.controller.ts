import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IncomeService } from './income.service';
import { ControllerOutput, ControllerPaginatedOutput } from 'src/misc/interface/output.interface';
import { ApiResponse } from '@nestjs/swagger';
import { Income } from '@prisma/client';
import { CreateIncomeDto } from './dto/create-income.dto';
import { Pageable } from 'src/misc/interface/input.interface';
import { PartialIncomeDto } from './dto/partial-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';

@Controller('income')
export class IncomeController {
    constructor(private readonly incomeService: IncomeService){}

    @Post()
    @ApiResponse({
    description: 'cadastra novos usuarios',
    type: ControllerOutput<Income>,
  })
    async create(@Body() userDto: CreateIncomeDto): Promise<ControllerOutput> {
        const data =  this.incomeService.create(userDto);

        return {
        data,
        error: null,
        };
    }

  @Get('/all')
  @ApiResponse({
    type: ControllerPaginatedOutput<Income>,
    description: 'Find all Incomes',
  })
  async findAll(
    @Body() pagination: Pageable,
  ): Promise<ControllerPaginatedOutput<Income>> {
    return {
      data: await this.incomeService.findAll(pagination),
      error: null,
    };
  }

  @Get("/total")
    @ApiResponse({
      type:ControllerOutput<Income>,
      description: 'Return the total amount'
    })
    async findTotal() :Promise<number>{
      return this.incomeService.findTotal()
    }

  @Get()
  @ApiResponse({
    type: ControllerOutput<Income>,
    description: 'Find one Income',
  })
  async findOne(
    @Body() search: PartialIncomeDto,
  ): Promise<ControllerOutput<Income>> {
    return {
      data: await this.incomeService.findOne(search),
      error: null,
    };
  }

  @Patch(':id')
  @ApiResponse({
    type: ControllerOutput<Income>,
    description: 'Modify a Income',
  })
  async update(
    @Param('id') id: number,
    @Body() updateIncomeDto: UpdateIncomeDto,
  ): Promise<ControllerOutput<Income>> {
    const data = await this.incomeService.update(
      +id,
      updateIncomeDto,
    );
    return { data, error: null };
  }

  @Delete(':id')
  @ApiResponse({
    type: ControllerOutput<Income>,
    description: 'Delete one Income',
  })
  async delete(
    @Param('id') id: number,
  ): Promise<ControllerOutput<Income>> {
    const data = await this.incomeService.delete(+id,);
    return { data, error: null };
  }
}
