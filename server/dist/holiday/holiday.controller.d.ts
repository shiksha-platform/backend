import { HolidayDto } from "./dto/holiday.dto";
import { HolidayService } from "./holiday.service";
export declare class HolidayController {
    private readonly holidayService;
    constructor(holidayService: HolidayService);
    create(holidayDto: HolidayDto): Promise<import("../success-response").SuccessResponse>;
    findAll(): Promise<import("../success-response").SuccessResponse>;
    findOne(holidayId: string): Promise<import("../success-response").SuccessResponse>;
    update(holidayId: string, holidayDto: HolidayDto): Promise<import("../success-response").SuccessResponse>;
    delete(holidayId: string): Promise<import("../success-response").SuccessResponse>;
    findByYear(year: string): Promise<import("../success-response").SuccessResponse>;
    findByContext(context: string): Promise<import("../success-response").SuccessResponse>;
}
