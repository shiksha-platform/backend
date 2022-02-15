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
  Req
} from "@nestjs/common";
import { TeacherSearchDto } from "./dto/teacher-search.dto";
import { TeacherDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";
import {Request} from "express";

@Controller("teacher")
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getTeacherById(@Param("id") teacherId: string, @Req() request: Request )  {
    return this.teacherService.findById(teacherId, request.headers);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public async createTeacher(@Req() request: Request, @Body() teacherDto: TeacherDto )  {
    return this.teacherService.createTeacher(request.headers, teacherDto);
  }

  @Put("/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateTeacher(@Param("id") teacherId: string, @Req() request: Request, @Body() teacherDto: TeacherDto )  {
    return this.teacherService.updateTeacher(teacherId,request.headers,teacherDto);
  }

  @Post("/search")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchTeacher(@Req() request: Request, @Body() teacherSearchDto: TeacherSearchDto )  {
   return this.teacherService.searchTeacher(request.headers, teacherSearchDto);

  }

  @Post("/findBySubject")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findTeacherBySubject(@Query('subjectId') subjectId : String, @Req() request: Request,)  {
    return this.teacherService.findTeacherBySubject(''+subjectId, request.headers);
  } 
 
}
