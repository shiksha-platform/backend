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
  Req,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiCreatedResponse,
  ApiBody,
  ApiBasicAuth,
} from "@nestjs/swagger";
import { TeacherSearchDto } from "./dto/teacher-search.dto";
import { TeacherDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";
import { Request } from "express";

@ApiTags("Teacher")
@Controller("teacher")
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Teacher detail." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @SerializeOptions({
    strategy: "excludeAll",
  })
  public async getTeacherById(
    @Param("id") teacherId: string,
    @Req() request: Request
  ) {
    return this.teacherService.findById(teacherId, request);
  }

  @Post()
  @ApiBasicAuth("access-token")
  @ApiCreatedResponse({ description: "Teacher has been created successfully." })
  @ApiBody({ type: TeacherDto })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @UseInterceptors(ClassSerializerInterceptor)
  public async createTeacher(
    @Req() request: Request,
    @Body() teacherDto: TeacherDto
  ) {
    return this.teacherService.createTeacher(request, teacherDto);
  }

  @Put("/:id")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Teacher has been updated successfully." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateTeacher(
    @Param("id") teacherId: string,
    @Req() request: Request,
    @Body() teacherDto: TeacherDto
  ) {
    return this.teacherService.updateTeacher(teacherId, request, teacherDto);
  }

  @Post("/search")
  @ApiBasicAuth("access-token")
  @ApiCreatedResponse({ description: "Teacher list." })
  @ApiBody({ type: TeacherSearchDto })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: "excludeAll",
  })
  public async searchTeacher(
    @Req() request: Request,
    @Body() teacherSearchDto: TeacherSearchDto
  ) {
    return this.teacherService.searchTeacher(request, teacherSearchDto);
  }

  @Post("/findBySubject")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Teacher list." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: "excludeAll",
  })
  public async findTeacherBySubject(
    @Query("subjectId") subjectId: string,
    @Req() request: Request
  ) {
    return await this.teacherService.findTeacherBySubject(
      subjectId,
      request.headers
    );
  }
}
