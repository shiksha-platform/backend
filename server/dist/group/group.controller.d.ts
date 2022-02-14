import { GroupDto } from './dto/group.dto';
import { GroupService } from './group.service';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    create(createGroupDto: GroupDto): Promise<import("../success-response").SuccessResponse>;
    get(): Promise<import("../success-response").SuccessResponse>;
    findOne(id: string): Promise<import("../success-response").SuccessResponse>;
    update(id: string, updateGroupDto: GroupDto): Promise<import("../success-response").SuccessResponse>;
    delete(id: string): Promise<import("../success-response").SuccessResponse>;
}
