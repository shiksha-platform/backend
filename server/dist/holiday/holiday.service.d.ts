import { HolidayDto } from './dto/holiday.dto';
import { Repository } from 'typeorm';
import { Holiday } from './holiday.entity';
import { SuccessResponse } from '../success-response';
export declare class HolidayService {
    private readonly holidayRepository;
    [x: string]: any;
    private entityManager;
    constructor(holidayRepository: Repository<Holiday>);
    createHoliday(holidayDto: HolidayDto): Promise<SuccessResponse>;
    findAllHolidays(): Promise<SuccessResponse>;
    findHolidayById(holidayId: string): Promise<SuccessResponse>;
    updateHoliday(holidayId: string, updateHolidayto: HolidayDto): Promise<SuccessResponse>;
    deleteHoliday(holidayId: string): Promise<SuccessResponse>;
    findHolidayByYear(year: string): Promise<SuccessResponse>;
    findHolidayByContext(context: string): Promise<SuccessResponse>;
}
