import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import {ApiTags, ApiOkResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiBody, ApiBasicAuth} from "@nestjs/swagger";
import { AdminConfigDto } from './dto/adminConfig.dto';
import { AdminConfigService } from './adminConfig.service';
import {AdminConfig} from "./adminConfig.entity";

@ApiTags('Admin Config')
@Controller('adminConfig')
export class AdminConfigController {

    constructor(private readonly adminConfigService: AdminConfigService) {}

    @Post()
    @ApiBasicAuth('access-token')
    @ApiCreatedResponse({ description: "Admin config has been created successfully."})
    @ApiBody({ type: AdminConfigDto })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async create(@Body() createAdminConfigDto: AdminConfigDto) {
        const adminConfigEntity = new AdminConfig();
        Object.assign(adminConfigEntity, createAdminConfigDto);
        const result = await this.adminConfigService.createAdminConfig(adminConfigEntity);
        if (!result)
        throw new HttpException('Error creating new admin config', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get()
    @ApiBasicAuth('access-token')
    @ApiOkResponse({ description: "Admin config list."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async get() {
        const result = await this.adminConfigService.getAdminConfig();
        if (!result)
        throw new HttpException('Error finding admin configs', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get(':id')
    @ApiBasicAuth('access-token')
    @ApiOkResponse({ description: "Admin config detail."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async findOne(@Param('id') id: string) {
        const result = await this.adminConfigService.findAdminConfigById(id);
        if (!result)
        throw new HttpException('Error finding admin config by its id', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Put(':id')
    @ApiBasicAuth('access-token')
    @ApiOkResponse({ description: "Admin config has been updated successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async update(@Param('id') id: string, @Body() updateAdminConfigDto: AdminConfigDto) {
        const updateAdminConfigEntity = new AdminConfig();
        Object.assign(updateAdminConfigEntity, updateAdminConfigDto);
        const result = await this.adminConfigService.updateAdminConfig(id, updateAdminConfigEntity);
        if (!result)
        throw new HttpException('Error updating admin configs', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Delete(':id')
    @ApiBasicAuth('access-token')
    @ApiOkResponse({ description: "Admin config has been deleted successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async delete(@Param('id') id: string) {
        const result = await this.adminConfigService.deleteAdminConfig(id);
        if (!result)
        throw new HttpException('Error deleting admin config', HttpStatus.BAD_REQUEST);
      return result;
    }
}
