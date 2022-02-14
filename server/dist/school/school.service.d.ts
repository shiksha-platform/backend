import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { SchoolDto } from './dto/school.dto';
import { SchoolResponseDto } from './dto/school-response.dto';
import { SchoolSearchDto } from './dto/school-search.dto';
export declare class SchoolService {
    private httpService;
    constructor(httpService: HttpService);
    url: string;
    findById(schoolId: string): Promise<Observable<SchoolDto>>;
    createSchool(schoolDto: SchoolDto): Promise<Observable<SchoolResponseDto>>;
    updateSchool(schoolId: string, schoolDto: SchoolDto): Promise<Observable<SchoolDto>>;
    searchSchool(schoolSearchDto: SchoolSearchDto): Promise<Observable<any>>;
}
