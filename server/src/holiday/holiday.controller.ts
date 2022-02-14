import {
  Controller,
  Put,
  Get,
  Body,
  Param,
  HttpStatus,
  Post,
  HttpException,
  Delete,
} from "@nestjs/common";
import { HolidayDto } from "./dto/holiday.dto";
import { HolidayService } from "./holiday.service";

@Controller("holiday")
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @Post()
  async create(@Body() holidayDto: HolidayDto) {
    const result = await this.holidayService.createHoliday(holidayDto);
    if (!result)
    throw new HttpException('Error adding new holiday', HttpStatus.BAD_REQUEST);
    return result;
  }

  @Get()
  async findAll() {
    const result = await this.holidayService.findAllHolidays();
    if (!result)
    throw new HttpException('Error finding holidays', HttpStatus.BAD_REQUEST);
    return result;
  }
  
  @Get(':id')
  async findOne(@Param('id') holidayId: string) {
      const result = await this.holidayService.findHolidayById(holidayId);
      if (!result)
      throw new HttpException('Error finding holiday by its id', HttpStatus.BAD_REQUEST);
    return result;
  }

  @Put(':id')
  async update(@Param('id') holidayId: string, @Body() holidayDto: HolidayDto) {
      const result = await this.holidayService.updateHoliday(holidayId, holidayDto);
      if (!result)
      throw new HttpException('Error updating holiday', HttpStatus.BAD_REQUEST);
    return result;
  }

  @Delete(':id')
  async delete(@Param('id') holidayId: string) {
    const result = await this.holidayService.deleteHoliday(holidayId);
    if (!result)
    throw new HttpException('Error deleting holiday', HttpStatus.BAD_REQUEST);
    return result;
  }

  @Get('/findByYear/:year')
  async findByYear(@Param('year') year: string) {
      const result = await this.holidayService.findHolidayByYear(year);
      if (!result)
      throw new HttpException('Error finding holiday by its year', HttpStatus.BAD_REQUEST);
    return result;
  }

  @Get('/findByContext/:context')
  async findByContext(@Param('context') context: string) {
      const result = await this.holidayService.findHolidayByContext(context);
      if (!result)
      throw new HttpException('Error finding holiday by its context', HttpStatus.BAD_REQUEST);
    return result;
  }
}
