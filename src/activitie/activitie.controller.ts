import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ActivitieService } from './activitie.service';

@Controller('activitie')
export class ActivitieController {
  constructor(private readonly activitieService: ActivitieService) {}

  @Get(':id')
  async findActivitieById(@Param('id') id: string) {
    return this.activitieService.activitie(id);
  }

  @Get('record/:recordId')
  async findActivitiesByRecordId(@Param('recorId') recordId: string) {
    return this.activitieService.recordActivities(recordId);
  }

  @Post('')
  async createActivitiesByDetail(
    @Body()
    data: {
      name: string;
      dateTime: string | Date;
      place: string;
      misc: string;
      recordId: any;
    },
  ) {
    return this.activitieService.createActivitie(data);
  }

  @Delete(':id')
  async deleteActivitieById(@Param('id') id: string) {
    return this.activitieService.deleteActivitie(id);
  }
}
