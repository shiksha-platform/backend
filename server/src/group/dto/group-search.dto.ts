import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class GroupSearchDto {
  
  
  limit: string;
  
  filters: object;
  
  
  constructor(partial: Partial<GroupSearchDto>) {
    Object.assign(this, partial);
  }



}
