import {
  Controller,
  Put,
  Get,
  Body,
  Res,
  Param,
  UseGuards,
  HttpStatus,
  NotFoundException,
  ClassSerializerInterceptor,
  UseInterceptors,
  Post,
  Query,
  SerializeOptions,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AttendanceSearchDto } from "./dto/attendance-search.dto";
import { AttendanceDto } from "./dto/attendance.dto";
import { AttendanceService } from "./attendance.service";
import { Attendance } from "./attendance.entity";

@Controller("attendance")
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getAttendanceById(@Param("id") attendanceId: string )  {
    return this.attendanceService.findById(attendanceId);
  }

  @Get()
  public async getAttendanceByDate(@Query("fromDate") fromDate: string,
  @Query("toDate") toDate: string, 
  @Query("groupId") groupId: string,
  @Query("topicId") topicId: string,
  @Query("schoolId") schoolId: string ) : Promise<Attendance[]> {
    return await this.attendanceService.findByDate(fromDate,toDate,groupId,topicId,schoolId);
  }

  @Get('/find/report')
  public async getAttendanceReports(@Query("fromDate") fromDate: string,
  @Query("toDate") toDate: string, 
  @Query("groupId") groupId: string,
  @Query("topicId") topicId: string,
  @Query("schoolId") schoolId: string) : Promise<Attendance[]> {
    return await this.attendanceService.findReportRecords(fromDate,toDate,groupId,topicId,schoolId);
  }

  @Post()
  public async createAttendance(@Body() attendanceDto: AttendanceDto[] )  {
    return this.attendanceService.createAttendance(attendanceDto);
  }

  @Put()
  public async updateAttendance(@Body() attendanceDto: AttendanceDto)  {
    return this.attendanceService.updateAttendance(attendanceDto);
  }

 
}
