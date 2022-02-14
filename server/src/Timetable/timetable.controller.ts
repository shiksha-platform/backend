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
import { TimetableSearchDto } from "./dto/timetable-search.dto";
import { TimetableDto } from "./dto/timetable.dto";
import { TimetableService } from "./timetable.service";

@Controller("timetable")
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getTimetableById(@Param("id") timetableId: string )  {
    return this.timetableService.findById(timetableId);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public async createTimetable(@Body() timetableDto: TimetableDto )  {
    return this.timetableService.createTimetable(timetableDto);
  }

  @Put("/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateTimetable(@Param("id") timetableId: string, @Body() timetableDto: TimetableDto )  {
    return this.timetableService.updateTimetable(timetableId,timetableDto);
  }

  @Post("/search")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchTimetable(@Body() timetableSearchDto: TimetableSearchDto )  {
   return this.timetableService.searchTimetable(timetableSearchDto);

  }

  @Post("/findByClass")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findTimetableByClass(@Query('id') query : String)  {
    return this.timetableService.findTimetableByClass(''+query);
  } 
 
}
