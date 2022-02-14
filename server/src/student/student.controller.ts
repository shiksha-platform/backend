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
import { StudentSearchDto } from "./dto/student-search.dto";
import { StudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getStudentById(@Param("id") studentId: string )  {
    return this.studentService.findById(studentId);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public async createStudent(@Body() studentDto: StudentDto )  {
    return this.studentService.createStudent(studentDto);
  }

  @Put("/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateStudent(@Param("id") studentId: string, @Body() studentDto: StudentDto )  {
    return this.studentService.updateStudent(studentId,studentDto);
  }

  @Post("/search")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchStudent(@Body() studentSearchDto: StudentSearchDto )  {
   return this.studentService.searchStudent(studentSearchDto);

  }

  @Post("/findByClass")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findStudentByClass(@Query('classId') classId : String)  {
    return this.studentService.findStudentByClass(''+classId);
  } 
 
}
