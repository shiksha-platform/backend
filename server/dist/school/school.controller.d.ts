import { SchoolSearchDto } from "./dto/school-search.dto";
import { SchoolDto } from "./dto/school.dto";
import { SchoolService } from "./school.service";
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    getSchoolById(schoolId: string): Promise<import("rxjs").Observable<SchoolDto>>;
    createSchool(schoolDto: SchoolDto): Promise<import("rxjs").Observable<import("./dto/school-response.dto").SchoolResponseDto>>;
    updateSchool(schoolId: string, schoolDto: SchoolDto): Promise<import("rxjs").Observable<SchoolDto>>;
    searchSchool(schoolSearchDto: SchoolSearchDto): Promise<import("rxjs").Observable<any>>;
}
