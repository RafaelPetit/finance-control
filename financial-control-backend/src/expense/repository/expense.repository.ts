import { Injectable } from "@nestjs/common";
import { $Enums, Expense,  } from "@prisma/client";
import { parseSearchToPrisma } from "src/misc/helpers/search.helper";
import { PrismaService } from "src/misc/prisma/prisma.service";
import { UpdateExpenseDto } from "../dto/update-expense.dto";

@Injectable()
export class ExpenseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(expense: Expense): Promise<Expense> {
    return await this.prismaService.expense.create({ data: expense });
  }

  async findAll (): Promise<Expense[]> {
    return this.prismaService.expense.findMany()
  }

  async findMonthlyCreditCardTotalAmount (): Promise<Expense[]> {
    return this.prismaService.expense.findMany(
      {where: 
      {
        paymentMethod: "CREDIT"
      }
    })
  }

  async findOne(search: Partial<Expense>): Promise<Expense> {
    const where = {
      ...parseSearchToPrisma(search),
      status: $Enums.Status.ACTIVE,
    };

    const item = await this.prismaService.expense.findFirst({ where });
    return item;
  }

  async update(
    id: number,
    updateExpenseDto: UpdateExpenseDto,
  ): Promise<Expense> {
    return await this.prismaService.expense.update({
      where: { id: +id },
      data: updateExpenseDto,
    });
  }

  async delete(id: number): Promise<Expense> {
    return await this.prismaService.expense.update({
      where: { id: +id },
      data: { status: $Enums.Status.INACTIVE },
    });
  }
  
}