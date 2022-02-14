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
import {ApiTags, ApiOkResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiBody} from "@nestjs/swagger";
import { StudentSearchDto } from "./dto/student-search.dto";
import { StudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";

@ApiTags('Student')
@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @ApiOkResponse({ description: "Student detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getStudentById(@Param("id") studentId: string )  {
    return this.studentService.findById(studentId);
  }

  @Post()
  @ApiCreatedResponse({ description: "Student has been created successfully."})
  @ApiBody({ type: StudentDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async createStudent(@Body() studentDto: StudentDto )  {
    return this.studentService.createStudent(studentDto);
  }

  @Put("/:id")
  @ApiOkResponse({ description: "Student has been updated successfully."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateStudent(@Param("id") studentId: string, @Body() studentDto: StudentDto )  {
    return this.studentService.updateStudent(studentId,studentDto);
  }

  @Post("/search")
  @ApiCreatedResponse({ description: "Student has been listed."})
  @ApiBody({ type: StudentSearchDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchStudent(@Body() studentSearchDto: StudentSearchDto )  {
   return this.studentService.searchStudent(studentSearchDto);

  }

  @Post("/findByClass")
  @ApiOkResponse({ description: "Student detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findStudentByClass(@Query('classId') classId : String)  {
    return this.studentService.findStudentByClass(''+classId);
  } 
 
}
