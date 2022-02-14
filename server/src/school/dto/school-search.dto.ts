import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class SchoolSearchDto {
  
  
  limit: string;
  
  filters: object;
  
  
  constructor(partial: Partial<SchoolSearchDto>) {
    Object.assign(this, partial);
  }



}
