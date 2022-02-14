import { BaseEntity } from '../model/base.entity';
export declare class Attendance extends BaseEntity {
    schoolId: string;
    userId: string;
    groupId: string;
    topicId: string;
    eventId: string;
    date: Date;
    attendance: string;
    remark: string;
    approved: string;
    approvedBy: string;
}
