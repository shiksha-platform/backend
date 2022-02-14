import { TimetableSearchDto } from "./dto/timetable-search.dto";
import { TimetableDto } from "./dto/timetable.dto";
import { TimetableService } from "./timetable.service";
export declare class TimetableController {
    private readonly timetableService;
    constructor(timetableService: TimetableService);
    getTimetableById(timetableId: string): Promise<import("rxjs").Observable<TimetableDto>>;
    createTimetable(timetableDto: TimetableDto): Promise<import("rxjs").Observable<import("./dto/timetable-response.dto").TimetableResponseDto>>;
    updateTimetable(timetableId: string, timetableDto: TimetableDto): Promise<import("rxjs").Observable<import("./dto/timetable-response.dto").TimetableResponseDto>>;
    searchTimetable(timetableSearchDto: TimetableSearchDto): Promise<import("rxjs").Observable<any>>;
    findTimetableByClass(query: String): Promise<import("rxjs").Observable<any>>;
}
