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
import { TeacherSearchDto } from "./dto/teacher-search.dto";
import { TeacherDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";

@Controller("teacher")
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getTeacherById(@Param("id") teacherId: string )  {
    return this.teacherService.findById(teacherId);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public async createTeacher(@Body() teacherDto: TeacherDto )  {
    return this.teacherService.createTeacher(teacherDto);
  }

  @Put("/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateTeacher(@Param("id") teacherId: string, @Body() teacherDto: TeacherDto )  {
    return this.teacherService.updateTeacher(teacherId,teacherDto);
  }

  @Post("/search")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchTeacher(@Body() teacherSearchDto: TeacherSearchDto )  {
   return this.teacherService.searchTeacher(teacherSearchDto);

  }

  @Post("/findBySubject")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findTeacherBySubject(@Query('subjectId') subjectId : String)  {
    return this.teacherService.findTeacherBySubject(''+subjectId);
  } 
 
}
