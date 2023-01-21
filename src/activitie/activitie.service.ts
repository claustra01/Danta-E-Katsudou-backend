import { Injectable } from '@nestjs/common';
import { Activitie } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ActivitieService {
  constructor(private prisma: PrismaService) {}

  async activitie(id: string): Promise<Activitie | null> {
    return this.prisma.activitie.findUnique({
      where: { id },
    });
  }

  async recordActivities(recordId: string): Promise<Activitie[]> {
    return this.prisma.activitie.findMany({
      where: { recordId },
    });
  }

  async createActivitie(data: {
    dateTime: string | Date;
    place: string;
    misc: string;
    recordId: any;
  }) {
    const activitie = await this.prisma.activitie.create({
      data: {
        dateTime: data.dateTime,
        place: data.place,
        misc: data.misc,
        recordId: data.recordId,
      },
      include: {
        member: true,
        Record: true,
      },
    });

    return activitie;
  }
}
