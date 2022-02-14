import { TeacherSearchDto } from "./dto/teacher-search.dto";
import { TeacherDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    getTeacherById(teacherId: string): Promise<import("rxjs").Observable<TeacherDto>>;
    createTeacher(teacherDto: TeacherDto): Promise<import("rxjs").Observable<import("./dto/teacher-response.dto").TeacherResponseDto>>;
    updateTeacher(teacherId: string, teacherDto: TeacherDto): Promise<import("rxjs").Observable<TeacherDto>>;
    searchTeacher(teacherSearchDto: TeacherSearchDto): Promise<import("rxjs").Observable<any>>;
    findTeacherBySubject(subjectId: String): Promise<import("rxjs").Observable<any>>;
}
