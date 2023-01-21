import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ActivitieController } from './activitie.controller';
import { ActivitieService } from './activitie.service';

@Module({
  controllers: [ActivitieController],
  providers: [ActivitieService, PrismaService],
})
export class ActivitieModule {}
