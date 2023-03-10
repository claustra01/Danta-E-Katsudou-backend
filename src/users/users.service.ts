import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(lineID: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { lineID },
    });
  }

  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        lineID: data.lineID,
      },
      include: {
        UserOnActiviteis: true,
        Record: true,
      },
    });
    if (user) {
      return user;
    } else {
      return this.prisma.user.create({
        data,
        include: {
          UserOnActiviteis: true,
          Record: true,
        },
      });
    }
  }

  async deleteUser(lineID: string) {
    return this.prisma.user.delete({
      where: {
        lineID: lineID,
      },
    });
  }
}
