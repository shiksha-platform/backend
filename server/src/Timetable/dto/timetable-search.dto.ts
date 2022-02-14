import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class TimetableSearchDto {
  
  
  limit: string;
  
  filters: object;
  
  
  constructor(partial: Partial<TimetableSearchDto>) {
    Object.assign(this, partial);
  }



}
