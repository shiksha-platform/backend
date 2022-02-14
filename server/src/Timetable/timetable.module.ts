import { Module } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { TimetableController } from './timetable.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [TimetableController],
    providers: [TimetableService]
})
export class TimetableModule {}
