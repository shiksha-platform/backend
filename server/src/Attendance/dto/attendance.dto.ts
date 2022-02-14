import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class AttendanceDto {
   
    @Expose()
    schoolId: string;

    @Expose()
    userId: string;   

    @Expose()
    groupId: string; 

    @Expose()
    topicId: string;

    @Expose()
    eventId: string;

    @Expose()
    date: Date;

    @Expose()
    attendance: string;

    @Expose()
    remark: string;

    @Expose()
    approved: string;    

    @Expose()
    approvedBy: string;


  constructor(partial: AttendanceDto) {
    Object.assign(this, partial);   
  }

  

}
