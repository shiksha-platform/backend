import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AdminConfigDto } from './dto/adminConfig.dto';
import { AdminConfigService } from './adminConfig.service';

@Controller('adminConfig')
export class AdminConfigController {

    constructor(private readonly adminConfigService: AdminConfigService) {}

    @Post()
    async create(@Body() createAdminConfigDto: AdminConfigDto) {
        const result = await this.adminConfigService.createAdminConfig(createAdminConfigDto);
        if (!result)
        throw new HttpException('Error creating new admin config', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get()
    async get() {
        const result = await this.adminConfigService.getAdminConfig();
        if (!result)
        throw new HttpException('Error finding admin configs', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const result = await this.adminConfigService.findAdminConfigById(id);
        if (!result)
        throw new HttpException('Error finding admin config by its id', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateAdminConfigDto: AdminConfigDto) {
        const result = await this.adminConfigService.updateAdminConfig(id, updateAdminConfigDto);
        if (!result)
        throw new HttpException('Error updating admin configs', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.adminConfigService.deleteAdminConfig(id);
        if (!result)
        throw new HttpException('Error deleting admin config', HttpStatus.BAD_REQUEST);
      return result;
    }
}
