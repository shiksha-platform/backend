import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class TimetableSearchDto {

  @ApiProperty({
    type: String,
    description: 'Limit'
  })
  limit: string;

  @ApiProperty({
    type: Object,
    description: 'Filters'
  })
  filters: object;
  
  
  constructor(partial: Partial<TimetableSearchDto>) {
    Object.assign(this, partial);
  }



}
