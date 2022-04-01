import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiCreatedResponse,
  ApiBody,
  ApiQuery,
  ApiBasicAuth,
} from "@nestjs/swagger";
import { GroupDto } from "./dto/group.dto";
import { GroupService } from "./group.service";
import { GroupMembershipService } from "../groupMembership/groupMembership.service";
import { Group } from "./group.entity";

@ApiTags("Group")
@Controller("group")
export class GroupController {
  constructor(
    private readonly groupService: GroupService,
    private readonly groupMembershipService: GroupMembershipService
  ) {}

  @Post()
  @ApiBasicAuth("access-token")
  @ApiCreatedResponse({ description: "Group has been created successfully." })
  @ApiBody({ type: GroupDto })
  @ApiForbiddenResponse({ description: "Forbidden" })
  async create(@Body() createGroupDto: GroupDto) {
    const createGroupEntity = new Group();
    Object.assign(createGroupEntity, createGroupDto);
    const result = await this.groupService.createGroup(createGroupEntity);
    if (!result)
      throw new HttpException("Error adding new group", HttpStatus.BAD_REQUEST);
    return result;
  }

  @Get()
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Group list." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  async get() {
    const result = await this.groupService.getGroup();
    if (!result)
      throw new HttpException("Error finding groups", HttpStatus.BAD_REQUEST);
    return result;
  }

  @Get(":id")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Group detail." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  async findOne(@Param("id") id: string) {
    const result = await this.groupService.findGroupById(id);
    if (!result)
      throw new HttpException(
        "Error finding group by its id",
        HttpStatus.BAD_REQUEST
      );
    return result;
  }

  @Put(":id")
  @ApiOkResponse({ description: "Group has been updated successfully." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  async update(@Param("id") id: string, @Body() updateGroupDto: GroupDto) {
    const updateGroupEntity = new Group();
    Object.assign(updateGroupEntity, updateGroupDto);
    const result = await this.groupService.updateGroup(id, updateGroupEntity);
    if (!result)
      throw new HttpException("Error updating group", HttpStatus.BAD_REQUEST);
    return result;
  }

  @Delete(":id")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Group has been deleted successfully." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  async delete(@Param("id") id: string) {
    const result = await this.groupService.deleteGroup(id);
    if (!result)
      throw new HttpException("Error deleting group", HttpStatus.BAD_REQUEST);
    return result;
  }

  @Get(":id/members")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Group detail." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @ApiQuery({ name: "role", required: false })
  @ApiQuery({ name: "schoolId", required: false })
  public async getMembersOfGroup(
    @Param("id") id: string,
    @Query("role") role: string,
    @Query("schoolId") schoolId: string
  ) {
    return await this.groupMembershipService.findMembersOfGroup(
      id,
      role,
      schoolId
    );
  }

  @Get("memberships/:userId")
  @ApiBasicAuth("access-token")
  @ApiOkResponse({ description: "Group detail." })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @ApiQuery({ name: "role", required: false })
  @ApiQuery({ name: "schoolId", required: false })
  public async getGroupsByUserId(
    @Param("userId") id: string,
    @Query("role") role: string,
    @Query("schoolId") schoolId: string
  ) {
    return await this.groupMembershipService.findGroupsByUserId(
      id,
      role,
      schoolId
    );
  }
}
