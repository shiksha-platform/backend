import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupMembershipController } from './groupMembership.controller';
import { GroupMembership } from './groupMembership.entity';
import { GroupMembershipService } from './groupMembership.service';

@Module({
  imports: [TypeOrmModule.forFeature([GroupMembership])],
  controllers: [GroupMembershipController],
  providers: [GroupMembershipService]
})
export class GroupMembershipModule {}
