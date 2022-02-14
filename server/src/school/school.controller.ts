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
import { SchoolSearchDto } from "./dto/school-search.dto";
import { SchoolDto } from "./dto/school.dto";
import { SchoolService } from "./school.service";

@Controller("school")
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getSchoolById(@Param("id") schoolId: string )  {
    return this.schoolService.findById(schoolId);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public async createSchool(@Body() schoolDto: SchoolDto )  {
    return this.schoolService.createSchool(schoolDto);
  }

  @Put("/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateSchool(@Param("id") schoolId: string, @Body() schoolDto: SchoolDto )  {
    return this.schoolService.updateSchool(schoolId,schoolDto);
  }

  @Post("/search")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchSchool(@Body() schoolSearchDto: SchoolSearchDto )  {
   return this.schoolService.searchSchool(schoolSearchDto);

  }
 
}
