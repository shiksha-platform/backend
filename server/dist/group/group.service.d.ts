import { SuccessResponse } from './../success-response';
import { Repository } from 'typeorm';
import { GroupDto } from './dto/group.dto';
import { Group } from './group.entity';
export declare class GroupService {
    private readonly groupRepository;
    [x: string]: any;
    private entityManager;
    constructor(groupRepository: Repository<Group>);
    createGroup(groupDto: GroupDto): Promise<SuccessResponse>;
    getGroup(): Promise<SuccessResponse>;
    findGroupById(groupId: string): Promise<SuccessResponse>;
    updateGroup(groupId: string, updateGroupDto: GroupDto): Promise<SuccessResponse>;
    deleteGroup(groupId: string): Promise<SuccessResponse>;
}
