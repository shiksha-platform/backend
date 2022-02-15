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
import { SchoolSearchDto } from "./dto/school-search.dto";
import { SchoolDto } from "./dto/school.dto";
import { SchoolService } from "./school.service";
import {ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('School')
@Controller("school")
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @ApiOkResponse({ description: "School detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getSchoolById(@Param("id") schoolId: string )  {
    return this.schoolService.findById(schoolId);
  }

  @Post()
  @ApiCreatedResponse({ description: "School has been created successfully."})
  @ApiBody({ type: SchoolDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async createSchool(@Body() schoolDto: SchoolDto )  {
    return this.schoolService.createSchool(schoolDto);
  }

  @Put("/:id")
  @ApiOkResponse({ description: "School detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateSchool(@Param("id") schoolId: string, @Body() schoolDto: SchoolDto )  {
    return this.schoolService.updateSchool(schoolId,schoolDto);
  }

  @Post("/search")
  @ApiCreatedResponse({ description: "School list."})
  @ApiBody({ type: SchoolSearchDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchSchool(@Body() schoolSearchDto: SchoolSearchDto )  {
   return this.schoolService.searchSchool(schoolSearchDto);

  }
 
}
