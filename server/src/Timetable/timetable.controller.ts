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
import {ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags} from '@nestjs/swagger';
import { TimetableSearchDto } from "./dto/timetable-search.dto";
import { TimetableDto } from "./dto/timetable.dto";
import { TimetableService } from "./timetable.service";
import {AttendanceDto} from "../Attendance/dto/attendance.dto";

@ApiTags("Timetable")
@Controller("timetable")
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @ApiOkResponse({ description: "Timetable detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getTimetableById(@Param("id") timetableId: string )  {
    return this.timetableService.findById(timetableId);
  }

  @Post()
  @ApiCreatedResponse({ description: "Timetable has been created successfully."})
  @ApiBody({ type: TimetableDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async createTimetable(@Body() timetableDto: TimetableDto )  {
    return this.timetableService.createTimetable(timetableDto);
  }

  @Put("/:id")
  @ApiOkResponse({ description: "Timetable detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateTimetable(@Param("id") timetableId: string, @Body() timetableDto: TimetableDto )  {
    return this.timetableService.updateTimetable(timetableId,timetableDto);
  }

  @Post("/search")
  @ApiOkResponse({ description: "Timetable detail."})
  @ApiBody({ type: TimetableSearchDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchTimetable(@Body() timetableSearchDto: TimetableSearchDto )  {
   return this.timetableService.searchTimetable(timetableSearchDto);

  }

  @Post("/findByClass")
  @ApiOkResponse({ description: "Timetable detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findTimetableByClass(@Query('id') query : String)  {
    return this.timetableService.findTimetableByClass(''+query);
  } 
 
}
