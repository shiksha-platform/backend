import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HolidayDto {
  
  @Exclude()
  osid : string

  @Expose()
  holidayId : string;

  @ApiProperty({
    type: String,
    description: 'The date of the holiday'
  })
  @Expose()
  date : string;

  @ApiProperty({
    type: String,
    description: 'The remark of the holiday'
  })
  @Expose()
  remark : string;

  @ApiProperty({
    type: String,
    description: 'The year of the holiday'
  })
  @Expose()
  year : string;

  @ApiProperty({
    type: String,
    description: 'The context of the holiday'
  })
  @Expose()
  context : string;

  @ApiProperty({
    type: String,
    description: 'The context id of the holiday'
  })
  @Expose()
  contextId : string;


  constructor(partial: HolidayDto) {
    Object.assign(this, partial);
    this.holidayId = `${this.osid}`;
    this.date = `${this.date}` == null || undefined || 'undefined' ? "" : `${this.date}` ;
    this.remark = `${this.remark}` == null || undefined || 'undefined' ? "" : `${this.remark}` ;
    this.year = `${this.year}` == null || undefined || 'undefined' ? "" : `${this.year}` ;
    this.context = `${this.context}` == null || undefined || 'undefined' ? "" : `${this.context}` ;
    this.contextId = `${this.contextId}` == null || undefined || 'undefined' ? "" : `${this.contextId}` ;

  }

  

}
