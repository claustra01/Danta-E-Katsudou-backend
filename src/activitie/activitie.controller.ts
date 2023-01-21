import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Activitie } from '@prisma/client';
import { ActivitieService } from './activitie.service';

@Controller('activitie')
export class ActivitieController {
  constructor(private readonly activitieService: ActivitieService) {}

  @Get(':id')
  async findActivitieById(@Param('id') id: string): Promise<Activitie> {
    return this.activitieService.activitie(id);
  }

  @Get('record/:recordId')
  async findActivitiesByRecordId(
    @Param('recorId') recordId: string,
  ): Promise<Activitie[]> {
    return this.activitieService.recordActivities(recordId);
  }

  @Post('')
  async createActivitiesByDetail(
    @Body()
    data: {
      dateTime: string | Date;
      place: string;
      misc: string;
      recordId: any;
    },
  ) {
    return this.activitieService.createActivitie(data);
  }
}
