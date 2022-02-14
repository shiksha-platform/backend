import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class TopicSearchDto {
  
  
  limit: string;
  
  filters: object;
  
  
  constructor(partial: Partial<TopicSearchDto>) {
    Object.assign(this, partial);
  }



}
