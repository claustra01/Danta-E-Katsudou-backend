import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async user(
        id: string,
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id }
        })
    }

    async users(): Promise<User[]> {
        return this.prisma.user.findMany()
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const saltOrRounds = 10;
        data.passwordHash = await bcrypt.hash(data.passwordHash, saltOrRounds);
        return this.prisma.user.create({
            data,
        })
    }
}
