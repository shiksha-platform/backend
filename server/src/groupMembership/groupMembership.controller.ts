import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import {ApiTags, ApiOkResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiBody} from "@nestjs/swagger";
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../group/group.entity';
import { Repository } from 'typeorm';
import { GroupMembershipDto } from './dto/groupMembership.dto';
import { GroupMembership } from './groupMembership.entity';
import { GroupMembershipService } from './groupMembership.service';
import {ErrorResponse} from "../error-response";

@ApiTags('Group Membership')
@Controller('groupMembership')
export class GroupMembershipController {
    
    constructor(private readonly groupMembershipService: GroupMembershipService, 
      @InjectRepository(Group)
      private readonly groupRepository: Repository<Group>,
      @InjectRepository(GroupMembership)
      private readonly groupMembershipRepository: Repository<GroupMembership>) {}

    @Post()
    @ApiCreatedResponse({ description: "Group membership has been created successfully."})
    @ApiBody({ type: GroupMembershipDto })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async create(@Body() createGroupMembershipDto: GroupMembershipDto) {
        // Validation for user can't join same group again
        const response = await this.groupMembershipRepository.findOne(
            { where: {
                    group: createGroupMembershipDto.groupId,
                    userId: createGroupMembershipDto.userId }});
        if(response !== undefined && Object.keys(response).length > 0) {
            throw new HttpException('Error adding new groupMembership', HttpStatus.BAD_REQUEST);
        }

        const groupMembershipEntity = new GroupMembership();
        groupMembershipEntity.role = createGroupMembershipDto.role;
        groupMembershipEntity.group = await this.groupRepository.findOne(createGroupMembershipDto.groupId);
        groupMembershipEntity.schoolId = createGroupMembershipDto.schoolId;
        groupMembershipEntity.userId = createGroupMembershipDto.userId;
      
        const result = await this.groupMembershipService.createGroupMembership(groupMembershipEntity);
        if (!result)
        throw new HttpException('Error adding new groupMembership', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get()
    @ApiOkResponse({ description: "Group membership list."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async get() {
        const result = await this.groupMembershipService.getGroupMembership();
        if (!result)
        throw new HttpException('Error finding groupMembership', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get(':id')
    @ApiOkResponse({ description: "Group membership detail."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async findOne(@Param('id') id: string) {
        const result = await this.groupMembershipService.findGroupMembershipById(id);
        if (!result)
        throw new HttpException('Error finding groupMembership by its id', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get('school/:schoolId')
    @ApiOkResponse({ description: "Group membership detail."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async findBySchoolId(@Param('schoolId') schoolId: string) {
        const result = await this.groupMembershipService.findGroupMembershipBySchoolId(schoolId);
        if (!result)
        throw new HttpException('Error finding groupMembership by school id', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get('user/:userId')
    @ApiOkResponse({ description: "Group membership detail."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async find(@Param('userId') userId: string) {
        const result = await this.groupMembershipService.findGroupMembershipByUserId(userId);
        if (!result)
        throw new HttpException('Error finding groupMembership by its userId', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Put(':id')
    @ApiOkResponse({ description: "Group membership has been updated successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async update(@Param('id') id: string, @Body() updateGroupDto: GroupMembershipDto) {
        const updateGroupMembershipEntity = new GroupMembership();
        updateGroupMembershipEntity.role = updateGroupDto.role;
        updateGroupMembershipEntity.group = await this.groupRepository.findOne(updateGroupDto.groupId);
        updateGroupMembershipEntity.schoolId = updateGroupDto.schoolId;
        updateGroupMembershipEntity.userId = updateGroupDto.userId;

        const result = await this.groupMembershipService.updateGroupMembership(id, updateGroupMembershipEntity);
        if (!result)
        throw new HttpException('Error updating groupMembership', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Delete(':id')
    @ApiOkResponse({ description: "Group membership has been deleted successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async delete(@Param('id') id: string) {
        const result = await this.groupMembershipService.deleteGroupMembership(id);
        if (!result)
        throw new HttpException('Error deleting groupMembership', HttpStatus.BAD_REQUEST);
      return result;
    }
}
