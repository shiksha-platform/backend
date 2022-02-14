import { AttendanceDto } from "./dto/attendance.dto";
import { AttendanceService } from "./attendance.service";
import { Attendance } from "./attendance.entity";
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    getAttendanceById(attendanceId: string): Promise<Attendance>;
    getAttendanceByDate(fromDate: string, toDate: string, groupId: string, topicId: string, schoolId: string): Promise<Attendance[]>;
    getAttendanceReports(fromDate: string, toDate: string, groupId: string, topicId: string, schoolId: string): Promise<Attendance[]>;
    createAttendance(attendanceDto: AttendanceDto[]): Promise<(AttendanceDto & Attendance)[]>;
    updateAttendance(attendanceDto: AttendanceDto): Promise<AttendanceDto & Attendance>;
}
