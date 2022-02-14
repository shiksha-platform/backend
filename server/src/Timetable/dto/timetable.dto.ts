import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class TimetableDto {
  
  @Exclude()
  osid : string 
  
  @Expose()
  timetableRecordId: string;

  @Expose()
  schoolId: string;
  
  @Expose()
  classId: string;
  
  @Expose()
  teacherId: string;

  @Expose()
  subjectId: string;

  @Expose()
  dayOfWeek : string

  @Expose()
  inTime : string

  @Expose()
  outTime : string




  constructor(partial: TimetableDto) {
    Object.assign(this, partial);
    this.timetableRecordId = `${this.osid}`;
    this.dayOfWeek = `${this.dayOfWeek}` == null || undefined || 'undefined' ? "" : `${this.dayOfWeek}` ;
    this.inTime = `${this.inTime}` == null || undefined || 'undefined' ? "" : `${this.inTime}` ;
    this.outTime = `${this.outTime}` == null || undefined || 'undefined' ? "" : `${this.outTime}` ;
    this.subjectId = `${this.subjectId}` == null || undefined || 'undefined' ? "" : `${this.subjectId}` ;
    this.teacherId = `${this.teacherId}` == null || undefined || 'undefined' ? "" : `${this.teacherId}` ;
    this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}` ;
    this.classId = `${this.classId}` == null || undefined || 'undefined' ? "" : `${this.classId}` ;

  }

  

}
