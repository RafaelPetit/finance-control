import { Injectable } from "@nestjs/common";
import { $Enums, Expense,  } from "@prisma/client";
import { parseSearchToPrisma } from "src/misc/helpers/search.helper";
import { Pageable } from "src/misc/interface/input.interface";
import { Paginated } from "src/misc/interface/output.interface";
import { PrismaService } from "src/misc/prisma/prisma.service";
import { UpdateExpenseDto } from "../dto/update-expense.dto";

@Injectable()
export class ExpenseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(expense: Expense): Promise<Expense> {
    return await this.prismaService.expense.create({ data: expense });
  }

  async findAll(pageable: Pageable<Expense>): Promise<Paginated<Expense>> {
    const page = pageable.page === null ? +pageable.page : 1;
    const perPage =
      pageable?.itemsPerPage === null ? +pageable.itemsPerPage : 10;
    const where = {
      ...(pageable.status && { status: pageable.status }),
    };
    const totalItems = await this.prismaService.expense.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const orderBy = {
      [pageable.sortBy]: pageable.sortBy,
    };
    const items = await this.prismaService.expense.findMany({
      skip: (page - 1) * perPage,
      orderBy: orderBy,
      take: perPage,
      where,
    });

    return {
      page,
      totalItems,
      totalPages,
      items: items,
    };
  }

  async findTotal (): Promise<Expense[]> {
    return this.prismaService.expense.findMany()
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