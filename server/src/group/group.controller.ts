import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import {ApiTags, ApiOkResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiBody} from "@nestjs/swagger";
import { GroupDto } from './dto/group.dto';
import { GroupService } from './group.service';

@ApiTags('Group')
@Controller('group')
export class GroupController {

    constructor(private readonly groupService: GroupService) {}

    @Post()
    @ApiCreatedResponse({ description: "Group has been created successfully."})
    @ApiBody({ type: GroupDto })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async create(@Body() createGroupDto: GroupDto) {
        const result = await this.groupService.createGroup(createGroupDto);
        if (!result)
        throw new HttpException('Error adding new group', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get()
    @ApiOkResponse({ description: "Group list."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async get() {
        const result = await this.groupService.getGroup();
        if (!result)
        throw new HttpException('Error finding groups', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get(':id')
    @ApiOkResponse({ description: "Group detail."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async findOne(@Param('id') id: string) {
        const result = await this.groupService.findGroupById(id);
        if (!result)
        throw new HttpException('Error finding group by its id', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Put(':id')
    @ApiOkResponse({ description: "Group has been updated successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async update(@Param('id') id: string, @Body() updateGroupDto: GroupDto) {
        const result = await this.groupService.updateGroup(id, updateGroupDto);
        if (!result)
        throw new HttpException('Error updating group', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Delete(':id')
    @ApiOkResponse({ description: "Group has been deleted successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async delete(@Param('id') id: string) {
        const result = await this.groupService.deleteGroup(id);
        if (!result)
        throw new HttpException('Error deleting group', HttpStatus.BAD_REQUEST);
      return result;
    }
}
