import { Injectable } from "@nestjs/common";
import { $Enums, Income } from "@prisma/client";
import { parseSearchToPrisma } from "src/misc/helpers/search.helper";
import { Pageable } from "src/misc/interface/input.interface";
import { Paginated } from "src/misc/interface/output.interface";
import { PrismaService } from "src/misc/prisma/prisma.service";
import { UpdateIncomeDto } from "../dto/update-income.dto";

@Injectable()
export class IncomeRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(income: Income): Promise<Income> {
    return await this.prismaService.income.create({ data: income });
  }

  async findAll(pageable: Pageable<Income>): Promise<Paginated<Income>> {
    const page = pageable.page === null ? +pageable.page : 1;
    const perPage =
      pageable?.itemsPerPage === null ? +pageable.itemsPerPage : 10;
    const where = {
      ...(pageable.status && { status: pageable.status }),
    };
    const totalItems = await this.prismaService.income.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const orderBy = {
      [pageable.sortBy]: pageable.sortBy,
    };
    const items = await this.prismaService.income.findMany({
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

  async findTotal (): Promise<Income[]> {
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