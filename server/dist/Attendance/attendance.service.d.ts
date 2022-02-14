import { HttpService } from '@nestjs/axios';
import { AttendanceDto } from './dto/attendance.dto';
import { AttendanceSearchDto } from './dto/attendance-search.dto';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
export declare class AttendanceService {
    private httpService;
    private readonly attendanceRepository;
    constructor(httpService: HttpService, attendanceRepository: Repository<Attendance>);
    findById(attendanceId: string): Promise<Attendance>;
    findByDate(fromDate: string, toDate: string, topicId: string, groupId: string, schoolId: string): Promise<Attendance[]>;
    findReportRecords(fromDate: string, toDate: string, topicId: string, groupId: string, schoolId: string): Promise<Attendance[]>;
    createAttendance(attendanceDto: AttendanceDto[]): Promise<(AttendanceDto & Attendance)[]>;
    updateAttendance(attendanceDto: AttendanceDto): Promise<AttendanceDto & Attendance>;
    searchAttendance(attendanceSearchDto: AttendanceSearchDto): Promise<void>;
    findAttendanceByClass(searchClassId: String, fromDate: String, toDate: String): Promise<void>;
    findAttendanceByClassAndSubject(classId: String, subjectId: String, fromDate: String, toDate: String): Promise<void>;
}
