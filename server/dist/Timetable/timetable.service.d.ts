import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { TimetableDto } from './dto/timetable.dto';
import { TimetableResponseDto } from './dto/timetable-response.dto';
import { TimetableSearchDto } from './dto/timetable-search.dto';
export declare class TimetableService {
    private httpService;
    constructor(httpService: HttpService);
    url: string;
    findById(timetableId: string): Promise<Observable<TimetableDto>>;
    createTimetable(timetableDto: TimetableDto): Promise<Observable<TimetableResponseDto>>;
    updateTimetable(timetableId: string, timetableDto: TimetableDto): Promise<Observable<TimetableResponseDto>>;
    searchTimetable(timetableSearchDto: TimetableSearchDto): Promise<Observable<any>>;
    findTimetableByClass(searchClassId: String): Promise<Observable<any>>;
}
