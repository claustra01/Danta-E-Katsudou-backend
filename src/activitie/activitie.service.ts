import { Injectable } from '@nestjs/common';
import { Activitie } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ActivitieService {
  constructor(private prisma: PrismaService) {}

  async activitie(id: string) {
    return this.prisma.activitie.findUnique({
      where: { id },
      include: {
        member: true,
        Record: true,
      },
    });
  }

  async recordActivities(recordId: string): Promise<Activitie[]> {
    return this.prisma.activitie.findMany({
      where: { recordId },
      include: {
        member: true,
        Record: true,
      },
    });
  }

  async createActivitie(data: {
    name: string;
    dateTime: string | Date;
    place: string;
    misc: string;
    recordId: any;
  }) {
    const activitie = await this.prisma.activitie.create({
      data: {
        name: data.name,
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

  async deleteActivitie(id: string) {
    return this.prisma.activitie.delete({
      where: { id: id },
    });
  }
}
