import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AttendanceDto} from './dto/attendance.dto';
import { AttendanceResponseDto } from './dto/attendance-response.dto';
import { AttendanceSearchDto } from './dto/attendance-search.dto';
import { ErrorResponse } from './../error-response';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager } from 'typeorm';

@Injectable()
export class AttendanceService {
  constructor(private httpService:HttpService,
  @InjectRepository(Attendance)
  private readonly attendanceRepository: Repository<Attendance>) {}
  
  public async findById(attendanceId: string)  {
    const attendance = await this.attendanceRepository.findOne({
      where: {
        id: attendanceId,
      },
    });
    if (!attendance) {
      throw new NotFoundException(`Attendance not found for Id`);
    }
    return attendance;
  }

  public async findByDate(fromDate: string, toDate:string,topicId:string,
    groupId:string,schoolId: string) : Promise<Attendance[]>  {
    var query ='';
    if(fromDate!='' && fromDate!=null && toDate!='' && toDate!=null) {
      query += "attendance.date between :fromDate and :toDate"
    }
    else if(fromDate!='' && fromDate!=null) {
      query += "attendance.date <= :fromDate"
    }
    else if(toDate!='' && toDate!=null) {
      query += "attendance.date <= :toDate"
    }

    if(topicId!='' && topicId!=null) {
      query += " and attendance.topicId = :topicId"
    }
    if(groupId!='' && groupId!=null) {
      query += " and attendance.groupId = :groupId"
    }
    if(schoolId!='' && schoolId!=null) {
      query += " and attendance.schoolId = :schoolId"
    }
    const attendance = await this.attendanceRepository.createQueryBuilder()
    .select("attendance") 
    .from(Attendance, "attendance") 
    .where(query, { fromDate: fromDate,
    toDate:toDate, topicId:topicId, groupId:groupId,schoolId:schoolId }).getMany();
   
    if (!attendance) {
      var error = new ErrorResponse({
        errorCode : ''+HttpStatus.NOT_FOUND,
        errorMessage : 'Data Not found'
      })
      throw new HttpException(error,HttpStatus.NOT_FOUND);
    }
    return attendance;
  }

  public async findReportRecords(fromDate: string, toDate:string,topicId:string,
    groupId:string,schoolId: string) : Promise<Attendance[]>  {
      var totalArray =[];
      var query ='';
      if(fromDate!='' && fromDate!=null && toDate!='' && toDate!=null) {
        query += "attendance.date between :fromDate and :toDate"
      }
      else if(fromDate!='' && fromDate!=null) {
        query += "attendance.date <= :fromDate"
      }
      else if(toDate!='' && toDate!=null) {
        query += "attendance.date <= :toDate"
      }
  
      if(topicId!='' && topicId!=null) {
        query += " and attendance.topicId = :topicId"
      }
      if(groupId!='' && groupId!=null) {
        query += " and attendance.groupId = :groupId"
      }
      if(schoolId!='' && schoolId!=null) {
        query += " and attendance.schoolId = :schoolId"
      }
      query += " and attendance.attendance='P' "

      const attendance = await this.attendanceRepository.createQueryBuilder()
      .select("attendance.userId", "userId")
      .addSelect("count(*)","count")
      .from(Attendance, "attendance") 
      .where(query, { fromDate: fromDate,
      toDate:toDate, topicId:topicId, groupId:groupId,schoolId:schoolId })
      .groupBy("attendance.userId")
      .orderBy("attendance.userId")
      .getRawMany();
       
      var presentArray = []
      if(attendance) {
        presentArray =  attendance.filter(item => (item.count>=7))
      }

      totalArray.push(presentArray)

      if (!attendance) {
        var error = new ErrorResponse({
          errorCode : ''+HttpStatus.NOT_FOUND,
          errorMessage : 'Data Not found'
        })
        throw new HttpException(error,HttpStatus.NOT_FOUND);
      }
      return totalArray;
  }

  public async createAttendance(attendanceDto: Attendance) {
    try {
      return await this.attendanceRepository.save(attendanceDto);
    } catch (err) {
      var error = new ErrorResponse({
        errorCode : ''+HttpStatus.BAD_REQUEST,
        errorMessage : 'Bad Request - Invalid value for column '+ err.column
      })
      throw new HttpException(error,HttpStatus.BAD_REQUEST);
    }
  }


  public async updateAttendance(attendanceId: string, attendanceDto: Attendance) {
    try {
      return await this.attendanceRepository.update(attendanceId, attendanceDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

public async searchAttendance(attendanceSearchDto: AttendanceSearchDto) {
 

 
}

public async findAttendanceByClass(searchClassId: String,
  fromDate: String, toDate: String) {
 
}


public async findAttendanceByClassAndSubject(classId: String,
  subjectId : String,
  fromDate: String, toDate: String) {
  }
 

}


