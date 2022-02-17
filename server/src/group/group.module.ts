import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from './group.controller';
import { Group } from './group.entity';
import { GroupService } from './group.service';
import { GroupMembership } from "../groupMembership/groupMembership.entity";
import { GroupMembershipService } from "../groupMembership/groupMembership.service";

@Module({
  imports: [TypeOrmModule.forFeature([Group, GroupMembership])],
  controllers: [GroupController],
  providers: [GroupService, GroupMembershipService]
})
export class GroupModule {}
