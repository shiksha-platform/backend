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
import {ApiBasicAuth, ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import { Request } from 'express';

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
  @ApiBasicAuth('access-token')
  @ApiCreatedResponse({ description: "School has been created successfully."})
  @ApiBody({ type: SchoolDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async createSchool(@Body() schoolDto: SchoolDto, @Req() request: Request )  {
    return this.schoolService.createSchool(schoolDto, request.headers);
  }

  @Put("/:id")
  @ApiBasicAuth('access-token')
  @ApiOkResponse({ description: "School detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateSchool(@Param("id") schoolId: string, @Body() schoolDto: SchoolDto, @Req() request: Request )  {
    return this.schoolService.updateSchool(schoolId,schoolDto, request.headers);
  }

  @Post("/search")
  @ApiBasicAuth('access-token')
  @ApiCreatedResponse({ description: "School list."})
  @ApiBody({ type: SchoolSearchDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchSchool(@Body() schoolSearchDto: SchoolSearchDto, @Req() request: Request )  {
   return this.schoolService.searchSchool(schoolSearchDto, request.headers);

  }
 
}
