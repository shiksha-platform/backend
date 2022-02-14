import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class TeacherSearchDto {
  
  
  limit: string;
  
  filters: object;
  
  
  constructor(partial: Partial<TeacherSearchDto>) {
    Object.assign(this, partial);
  }



}
