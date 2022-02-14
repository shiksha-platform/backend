import { Module } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { HolidayController } from './holiday.controller';
import { Holiday } from './holiday.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Holiday])],
    controllers: [HolidayController],
    providers: [HolidayService]
})
export class HolidayModule {}
