import { Injectable } from "@nestjs/common";
import { $Enums, Income } from "@prisma/client";
import { parseSearchToPrisma } from "src/misc/helpers/search.helper";
import { PrismaService } from "src/misc/prisma/prisma.service";
import { UpdateIncomeDto } from "../dto/update-income.dto";

@Injectable()
export class IncomeRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(income: Income): Promise<Income> {
    return await this.prismaService.income.create({ data: income });
  }

  async findAll (): Promise<Income[]> {
    return this.prismaService.income.findMany()
  }

  async findOne(search: Partial<Income>): Promise<Income> {
    const where = {
      ...parseSearchToPrisma(search),
      status: $Enums.Status.ACTIVE,
    };

    const item = await this.prismaService.income.findFirst({ where });
    return item;
  }

  async update(
    id: number,
    updateincomeDto: UpdateIncomeDto,
  ): Promise<Income> {
    return await this.prismaService.income.update({
      where: { id: +id },
      data: updateincomeDto,
    });
  }

  async delete(id: number): Promise<Income> {
    return await this.prismaService.income.update({
      where: { id: +id },
      data: { status: $Enums.Status.INACTIVE },
    });
  }
  
}