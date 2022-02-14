import { SuccessResponse } from './../success-response';
import { Repository } from 'typeorm';
import { GroupMembershipDto } from './dto/groupMembership.dto';
import { GroupMembership } from './groupMembership.entity';
export declare class GroupMembershipService {
    private readonly groupMembershipRepository;
    [x: string]: any;
    private entityManager;
    constructor(groupMembershipRepository: Repository<GroupMembership>);
    createGroupMembership(groupMembershipDto: GroupMembershipDto): Promise<SuccessResponse>;
    getGroupMembership(): Promise<SuccessResponse>;
    findGroupMembershipById(groupMembershipId: string): Promise<SuccessResponse>;
    findGroupMembershipBySchoolId(schoolId: string): Promise<SuccessResponse>;
    findGroupMembershipByUserId(userId: string): Promise<SuccessResponse>;
    updateGroupMembership(groupMembershipId: string, updateGroupMembershipDto: GroupMembershipDto): Promise<SuccessResponse>;
    deleteGroupMembership(groupMembershipId: string): Promise<SuccessResponse>;
}
