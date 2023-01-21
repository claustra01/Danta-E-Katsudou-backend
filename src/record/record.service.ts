import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RecordService {
  constructor(private prisma: PrismaService) {}

  async record(id: string) {
    return await this.prisma.record.findUnique({
      where: { id },
      include: {
        activities: true,
      },
    });
  }

  async createRecord(data: Prisma.RecordCreateInput) {
    return await this.prisma.record.create({
      data: {
        name: data.name,
      },
      include: {
        activities: true,
      },
    });
  }
}
