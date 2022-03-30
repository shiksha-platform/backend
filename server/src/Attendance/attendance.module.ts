import { Module } from "@nestjs/common";
import { AttendanceService } from "./attendance.service";
import { AttendanceController } from "./attendance.controller";
import { HttpModule, HttpService } from "@nestjs/axios";
import { Attendance } from "./attendance.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MulterModule } from "@nestjs/platform-express";
@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Attendance]),
    MulterModule.register({
      dest: "./uploads",
    }),
  ],
  controllers: [AttendanceController],
  providers: [AttendanceService],
})
export class AttendanceModule {}
