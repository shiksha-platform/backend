import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class StudentSearchDto {
  
  
  limit: string;
  
  filters: object;
  
  
  constructor(partial: Partial<StudentSearchDto>) {
    Object.assign(this, partial);
  }



}
