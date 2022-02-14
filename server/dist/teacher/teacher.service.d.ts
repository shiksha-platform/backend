import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { TeacherDto } from './dto/teacher.dto';
import { TeacherResponseDto } from './dto/teacher-response.dto';
import { TeacherSearchDto } from './dto/teacher-search.dto';
export declare class TeacherService {
    private httpService;
    constructor(httpService: HttpService);
    url: string;
    findById(teacherId: string): Promise<Observable<TeacherDto>>;
    createTeacher(teacherDto: TeacherDto): Promise<Observable<TeacherResponseDto>>;
    updateTeacher(teacherId: string, teacherDto: TeacherDto): Promise<Observable<TeacherDto>>;
    searchTeacher(teacherSearchDto: TeacherSearchDto): Promise<Observable<any>>;
    findTeacherBySubject(searchSubjectId: String): Promise<Observable<any>>;
}
