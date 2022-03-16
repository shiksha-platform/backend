import {
  Controller,
  Put,
  Get,
  Header,
  Body,
  Res,
  Param,
  ClassSerializerInterceptor,
  UseInterceptors,
  Post,
  Query,
  SerializeOptions,
  Req,
} from "@nestjs/common";
import { Request } from "express";
import {
  ApiTags,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiCreatedResponse,
  ApiBody,
  ApiBasicAuth,
} from "@nestjs/swagger";
import { StudentSearchDto } from "./dto/student-search.dto";
import { StudentGetByIdsDto } from "./dto/student-getbyids.dto";
import { StudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";

@ApiTags("Student")
@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Student detail." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @SerializeOptions({
    strategy: "excludeAll",
  })
  public async getStudentById(
    @Param("id") studentId: string,
    @Req() request: Request
  ) {
    return this.studentService.findById(studentId, request);
  }

  @Post()
  @ApiBasicAuth("access-token")
  @ApiCreatedResponse({ description: "Student has been created successfully." })
  @ApiBody({ type: StudentDto })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @UseInterceptors(ClassSerializerInterceptor)
  public async createStudent(
    @Req() request: Request,
    @Body() studentDto: StudentDto
  ) {
    return this.studentService.createStudent(request, studentDto);
  }

  @Put("/:id")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Student has been updated successfully." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateStudent(
    @Param("id") studentId: string,
    @Req() request: Request,
    @Body() studentDto: StudentDto
  ) {
    return this.studentService.updateStudent(studentId, request, studentDto);
  }

  @Post("/search")
  @ApiBasicAuth("access-token")
  @ApiCreatedResponse({ description: "Student has been listed test." })
  @ApiBody({ type: StudentSearchDto })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: "excludeAll",
  })
  public async searchStudent(
    @Req() request: Request,
    @Body() studentSearchDto: StudentSearchDto
  ) {
    return this.studentService.searchStudent(request.headers, studentSearchDto);
  }

  @Post("/findByClass")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Student detail." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: "excludeAll",
  })
  public async findStudentByClass(
    @Query("classId") classId: string,
    @Req() request: Request
  ) {
    return this.studentService.findStudentByClass(classId, request);
  }

  @Post("/getbyids")
  @ApiBasicAuth("access-token")
  @ApiCreatedResponse({ description: "Student has been listed test." })
  @ApiBody({ type: StudentGetByIdsDto })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: "excludeAll",
  })
  public async getByIds(
    @Body() studentIds: StudentGetByIdsDto,
    @Req() request: Request
  ) {
    return await this.studentService.getByIds(studentIds.ids, request);
  }
}
