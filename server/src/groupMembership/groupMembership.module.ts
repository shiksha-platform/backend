import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../group/group.entity';
import { GroupMembershipController } from './groupMembership.controller';
import { GroupMembership } from './groupMembership.entity';
import { GroupMembershipService } from './groupMembership.service';

@Module({
  imports: [TypeOrmModule.forFeature([GroupMembership, Group])],
  controllers: [GroupMembershipController],
  providers: [GroupMembershipService]
})
export class GroupMembershipModule {}
