import { Injectable } from '@nestjs/common';
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

  async createRecord(data: { name: string; lineId: string }) {
    return await this.prisma.record.create({
      data: {
        name: data.name,
        lineId: data.lineId,
      },
      include: {
        activities: true,
      },
    });
  }

  async deleteRecord(id: string) {
    return await this.prisma.record.delete({
      where: { id: id },
    });
  }
}
