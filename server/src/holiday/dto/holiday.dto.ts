import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class HolidayDto {
  
  @Exclude()
  osid : string 

  @Expose()
  holidayId : string;

  @Expose()
  date : string;

  @Expose()
  remark : string;

  @Expose()
  year : string;

  @Expose()
  context : string;

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
