import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class ConfigSearchDto {
  
  
  limit: string;
  
  filters: object;
  
  
  constructor(partial: Partial<ConfigSearchDto>) {
    Object.assign(this, partial);
  }



}
