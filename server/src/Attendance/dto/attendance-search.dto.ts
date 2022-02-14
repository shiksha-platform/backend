import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class AttendanceSearchDto {
  
  
  limit: string;
  
  filters: object;
  
  
  constructor(partial: Partial<AttendanceSearchDto>) {
    Object.assign(this, partial);
  }



}
