import { GroupMembershipDto } from './dto/groupMembership.dto';
import { GroupMembershipService } from './groupMembership.service';
export declare class GroupMembershipController {
    private readonly groupMembershipService;
    constructor(groupMembershipService: GroupMembershipService);
    create(createGroupMembershipDto: GroupMembershipDto): Promise<import("../success-response").SuccessResponse>;
    get(): Promise<import("../success-response").SuccessResponse>;
    findOne(id: string): Promise<import("../success-response").SuccessResponse>;
    findBySchoolId(schoolId: string): Promise<import("../success-response").SuccessResponse>;
    find(userId: string): Promise<import("../success-response").SuccessResponse>;
    update(id: string, updateGroupDto: GroupMembershipDto): Promise<import("../success-response").SuccessResponse>;
    delete(id: string): Promise<import("../success-response").SuccessResponse>;
}
