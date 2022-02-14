export declare class AttendanceDto {
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
    constructor(partial: AttendanceDto);
}
