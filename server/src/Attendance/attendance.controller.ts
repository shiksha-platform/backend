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
import {ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiQuery, ApiTags} from "@nestjs/swagger";
import { AttendanceDto } from "./dto/attendance.dto";
import { AttendanceService } from "./attendance.service";
import { Attendance } from "./attendance.entity";

@ApiTags('Attendance')
@Controller("attendance")
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @ApiOkResponse({ description: "Attendance by id."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  public async getAttendanceById(@Param("id") attendanceId: string )  {
    return await this.attendanceService.findById(attendanceId);
  }

  @Get()
  @ApiOkResponse({ description: "Listed attendance."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiQuery({ name: 'fromDate', required: false })
  @ApiQuery({ name: 'toDate', required: false })
  @ApiQuery({ name: 'groupId', required: false })
  @ApiQuery({ name: 'topicId', required: false })
  @ApiQuery({ name: 'schoolId', required: false })
  public async getAttendanceByDate(@Query("fromDate") fromDate: string,
  @Query("toDate") toDate: string, 
  @Query("groupId") groupId: string,
  @Query("topicId") topicId: string,
  @Query("schoolId") schoolId: string ) : Promise<Attendance[]> {
    return await this.attendanceService.findByDate(fromDate,toDate,groupId,topicId,schoolId);
  }

  @Get('/find/report')
    @ApiOkResponse({ description: "Listed attendance by id."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiQuery({ name: 'fromDate', required: false })
  @ApiQuery({ name: 'toDate', required: false })
  @ApiQuery({ name: 'groupId', required: false })
  @ApiQuery({ name: 'topicId', required: false })
  @ApiQuery({ name: 'schoolId', required: false })
  public async getAttendanceReports(@Query("fromDate") fromDate: string,
  @Query("toDate") toDate: string, 
  @Query("groupId") groupId: string,
  @Query("topicId") topicId: string,
  @Query("schoolId") schoolId: string) : Promise<Attendance[]> {
    return await this.attendanceService.findReportRecords(fromDate,toDate,groupId,topicId,schoolId);
  }

  @Post()
  @ApiCreatedResponse({ description: "Attendance has been created successfully."})
  @ApiBody({ type: AttendanceDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  public async createAttendance(@Body() attendanceDto: AttendanceDto[] )  {
    return this.attendanceService.createAttendance(attendanceDto);
  }

  @Put()
  @ApiOkResponse({ description: "Attendance has been updated successfully."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  public async updateAttendance(@Body() attendanceDto: AttendanceDto)  {
    return this.attendanceService.updateAttendance(attendanceDto);
  }

 
}
