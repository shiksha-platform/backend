import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class HolidaySearchDto {
  
  
  limit: string;
  
  filters: object;
  
  
  constructor(partial: Partial<HolidaySearchDto>) {
    Object.assign(this, partial);
  }



}
