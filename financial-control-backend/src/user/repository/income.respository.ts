import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/misc/prisma/prisma.service";

@Injectable()
export class UserRepository {
constructor(private readonly prismaService: PrismaService) {}

  async create(user: User): Promise<User> {
    return await this.prismaService.user.create({ data: user });
  }
}