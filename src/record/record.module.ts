import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';

@Module({
  controllers: [RecordController],
  providers: [RecordService, PrismaService],
})
export class RecordModule {}
