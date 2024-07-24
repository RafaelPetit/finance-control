import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/misc/prisma/prisma.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
constructor(
  private readonly prismaService: PrismaService) {}

  async create(user: User): Promise<User> {
    const hashPassword = await bcrypt.hash(user.password, 10)
    return await this.prismaService.user.create({ data: {...user, password: hashPassword}});
  }

  async findByEmail (email: string) :Promise<User> {
    return await this.prismaService.user.findUnique({where: {
      email:email}})
  }
}