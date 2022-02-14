import { Group } from '../group/group.entity';
import { BaseEntity } from './../model/base.entity';
export declare class GroupMembership extends BaseEntity {
    schoolId: string;
    group: Group;
    userId: string;
    role: string;
}
