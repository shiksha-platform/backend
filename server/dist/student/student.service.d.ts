import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { StudentDto } from './dto/student.dto';
import { StudentResponseDto } from './dto/student-response.dto';
import { StudentSearchDto } from './dto/student-search.dto';
export declare class StudentService {
    private httpService;
    constructor(httpService: HttpService);
    url: string;
    findById(studentId: string): Promise<Observable<StudentDto>>;
    createStudent(studentDto: StudentDto): Promise<Observable<StudentResponseDto>>;
    updateStudent(studentId: string, studentDto: StudentDto): Promise<Observable<StudentDto>>;
    searchStudent(studentSearchDto: StudentSearchDto): Promise<Observable<any>>;
    findStudentByClass(searchClassId: String): Promise<Observable<any>>;
}
