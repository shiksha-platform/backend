import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class TimetableDto {
  
  @Exclude()
  osid : string

  @Expose()
  timetableRecordId: string;

  @ApiProperty({
    type: String,
    description: 'The schoolId of the timetable',
    default: ''
  })
  @Expose()
  schoolId: string;

  @ApiProperty({
    type: String,
    description: 'The classId of the timetable',
    default: ''
  })
  @Expose()
  classId: string;

  @ApiProperty({
    type: String,
    description: 'The teacherId of the timetable',
    default: ''
  })
  @Expose()
  teacherId: string;

  @ApiProperty({
    type: String,
    description: 'The subjectId of the timetable',
    default: ''
  })
  @Expose()
  subjectId: string;

  @ApiProperty({
    type: String,
    description: 'The day of week of the timetable',
    default: ''
  })
  @Expose()
  dayOfWeek : string

  @ApiProperty({
    type: String,
    description: 'The inTime of the timetable',
    default: ''
  })
  @Expose()
  inTime : string

  @ApiProperty({
    type: String,
    description: 'The outTime of the timetable',
    default: ''
  })
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
