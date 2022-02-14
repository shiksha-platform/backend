import { BaseEntity } from './base.entity';
export declare class Event extends BaseEntity {
    schoolId: string;
    name: string;
    start: Date;
    end: Date;
    recurring: boolean;
    recurringFrequency: string;
    groupId: string;
    topicId: string;
    creatorId: string;
    primaryUserId: string;
    status: string;
}
