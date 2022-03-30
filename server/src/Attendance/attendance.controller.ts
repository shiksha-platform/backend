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
  UploadedFile,
} from "@nestjs/common";
import { AttendanceSearchDto } from "./dto/attendance-search.dto";
import {
  ApiBasicAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
  ApiConsumes,
} from "@nestjs/swagger";
import { AttendanceDto } from "./dto/attendance.dto";
import { AttendanceService } from "./attendance.service";
import { Attendance } from "./attendance.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName, imageFileFilter } from "./utils/file-upload.utils";
@ApiTags("Attendance")
@Controller("attendance")
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Attendance by id." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  public async getAttendanceById(@Param("id") attendanceId: string) {
    return await this.attendanceService.findById(attendanceId);
  }

  @Get()
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Listed attendance." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @ApiQuery({ name: "fromDate", required: false })
  @ApiQuery({ name: "toDate", required: false })
  @ApiQuery({ name: "groupId", required: false })
  @ApiQuery({ name: "eventId", required: false })
  @ApiQuery({ name: "topicId", required: false })
  @ApiQuery({ name: "schoolId", required: false })
  public async getAttendanceByDate(
    @Query("fromDate") fromDate: string,
    @Query("toDate") toDate: string,
    @Query("groupId") groupId: string,
    @Query("topicId") topicId: string,
    @Query("eventId") eventId: string,
    @Query("schoolId") schoolId: string
  ): Promise<Attendance[]> {
    return await this.attendanceService.findByDate(
      fromDate,
      toDate,
      eventId,
      groupId,
      topicId,
      schoolId
    );
  }

  @Get("/find/report")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Listed attendance by id." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @ApiQuery({ name: "fromDate", required: false })
  @ApiQuery({ name: "toDate", required: false })
  @ApiQuery({ name: "groupId", required: false })
  @ApiQuery({ name: "topicId", required: false })
  @ApiQuery({ name: "eventId", required: false })
  @ApiQuery({ name: "schoolId", required: false })
  public async getAttendanceReports(
    @Query("fromDate") fromDate: string,
    @Query("toDate") toDate: string,
    @Query("groupId") groupId: string,
    @Query("topicId") topicId: string,
    @Query("eventId") eventId: string,
    @Query("schoolId") schoolId: string
  ): Promise<Attendance[]> {
    return await this.attendanceService.findReportRecords(
      fromDate,
      eventId,
      toDate,
      groupId,
      topicId,
      schoolId
    );
  }

  @Post()
  @ApiConsumes("multipart/form-data")
  @ApiBasicAuth("access-token")
  @ApiCreatedResponse({
    description: "Attendance has been created successfully.",
  })
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./uploads",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  @ApiBody({ type: AttendanceDto })
  @ApiForbiddenResponse({ description: "Forbidden" })
  public async createAttendance(
    @Body() attendanceDto: AttendanceDto,
    @UploadedFile() image
  ) {
    const response = {
      originalname: image.originalname,
      filename: image.filename,
    };
    const createAttendanceEntity = new Attendance();
    Object.assign(createAttendanceEntity, attendanceDto, response);
    return this.attendanceService.createAttendance(createAttendanceEntity);
  }

  @Put(":id")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Attendance has been updated successfully." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  public async updateAttendance(
    @Param("id") id: string,
    @Body() attendanceDto: AttendanceDto
  ) {
    const updateAttendanceEntity = new Attendance();
    Object.assign(updateAttendanceEntity, attendanceDto);
    return this.attendanceService.updateAttendance(id, updateAttendanceEntity);
  }
}
