import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import {ApiTags, ApiOkResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiBody} from "@nestjs/swagger";
import { AdminConfigDto } from './dto/adminConfig.dto';
import { AdminConfigService } from './adminConfig.service';

@ApiTags('Admin Config')
@Controller('adminConfig')
export class AdminConfigController {

    constructor(private readonly adminConfigService: AdminConfigService) {}

    @Post()
    @ApiCreatedResponse({ description: "Admin config has been created successfully."})
    @ApiBody({ type: AdminConfigDto })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async create(@Body() createAdminConfigDto: AdminConfigDto) {
        const result = await this.adminConfigService.createAdminConfig(createAdminConfigDto);
        if (!result)
        throw new HttpException('Error creating new admin config', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get()
    @ApiOkResponse({ description: "Admin config list."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async get() {
        const result = await this.adminConfigService.getAdminConfig();
        if (!result)
        throw new HttpException('Error finding admin configs', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get(':id')
    @ApiOkResponse({ description: "Admin config detail."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async findOne(@Param('id') id: string) {
        const result = await this.adminConfigService.findAdminConfigById(id);
        if (!result)
        throw new HttpException('Error finding admin config by its id', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Put(':id')
    @ApiOkResponse({ description: "Admin config has been updated successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async update(@Param('id') id: string, @Body() updateAdminConfigDto: AdminConfigDto) {
        const result = await this.adminConfigService.updateAdminConfig(id, updateAdminConfigDto);
        if (!result)
        throw new HttpException('Error updating admin configs', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Delete(':id')
    @ApiOkResponse({ description: "Admin config has been deleted successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async delete(@Param('id') id: string) {
        const result = await this.adminConfigService.deleteAdminConfig(id);
        if (!result)
        throw new HttpException('Error deleting admin config', HttpStatus.BAD_REQUEST);
      return result;
    }
}
