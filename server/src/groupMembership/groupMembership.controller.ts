import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { GroupMembershipDto } from './dto/groupMembership.dto';
import { GroupMembershipService } from './groupMembership.service';

@Controller('groupMembership')
export class GroupMembershipController {
    
    constructor(private readonly groupMembershipService: GroupMembershipService) {}

    @Post()
    async create(@Body() createGroupMembershipDto: GroupMembershipDto) {
        const result = await this.groupMembershipService.createGroupMembership(createGroupMembershipDto);
        if (!result)
        throw new HttpException('Error adding new groupMembership', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get()
    async get() {
        const result = await this.groupMembershipService.getGroupMembership();
        if (!result)
        throw new HttpException('Error finding groupMembership', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const result = await this.groupMembershipService.findGroupMembershipById(id);
        if (!result)
        throw new HttpException('Error finding groupMembership by its id', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get('school/:schoolId')
    async findBySchoolId(@Param('schoolId') schoolId: string) {
        const result = await this.groupMembershipService.findGroupMembershipBySchoolId(schoolId);
        if (!result)
        throw new HttpException('Error finding groupMembership by school id', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get('user/:userId')
    async find(@Param('userId') userId: string) {
        const result = await this.groupMembershipService.findGroupMembershipByUserId(userId);
        if (!result)
        throw new HttpException('Error finding groupMembership by its userId', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateGroupDto: GroupMembershipDto) {
        const result = await this.groupMembershipService.updateGroupMembership(id, updateGroupDto);
        if (!result)
        throw new HttpException('Error updating groupMembership', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.groupMembershipService.deleteGroupMembership(id);
        if (!result)
        throw new HttpException('Error deleting groupMembership', HttpStatus.BAD_REQUEST);
      return result;
    }
}
