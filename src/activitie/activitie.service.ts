import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async createMember(activitieId: string, lineId: string) {
    try {
      console.log(activitieId);
      console.log(lineId);
      return await this.prisma.userOnActiviteis.create({
        data: {
          lineId: lineId,
          activitieId: activitieId,
        },
        include: {
          activitie: true,
          user: true,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
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

  async deleteMember(activitieId: string, lineId: string) {
    const ua = this.prisma.userOnActiviteis.findFirst({
      where: {
        lineId: lineId,
        activitieId: activitieId,
      },
    });
    if (!ua) {
      throw new BadRequestException();
    }

    return this.prisma.userOnActiviteis.delete({
      where: {
        lineId_activitieId: {
          lineId: lineId,
          activitieId: activitieId,
        },
      },
    });
  }
}
