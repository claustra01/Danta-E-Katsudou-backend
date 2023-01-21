import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get(':id')
  async findRecordById(@Param('id') id: string) {
    return this.recordService.record(id);
  }

  @Post('')
  async createRecordByDetail(@Body() data: { name: string; lineId: string }) {
    return this.recordService.createRecord(data);
  }

  @Delete(':id')
  async deleteRecordById(@Param('id') id: string) {
    return this.recordService.deleteRecord(id);
  }
}
