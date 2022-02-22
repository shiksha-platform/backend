import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class SchoolSearchDto {

  @ApiProperty({
    type: String,
    description: 'Limit'
  })
  limit: string;

  @ApiProperty({
    type: Object,
    description: 'Filters'
  })
  @ApiPropertyOptional()
  filters: object;
  
  
  constructor(partial: Partial<SchoolSearchDto>) {
    Object.assign(this, partial);
  }



}
