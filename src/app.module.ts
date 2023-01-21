import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ActivitieModule } from './activitie/activitie.module';
import { RecordModule } from './record/record.module';

@Module({
  imports: [UsersModule, ActivitieModule, RecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
