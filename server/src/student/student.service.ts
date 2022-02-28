import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import {HttpService } from '@nestjs/axios'
const resolvePath = require('object-resolve-path');

import { StudentDto} from './dto/student.dto';
import { ErrorResponse } from '../error-response';
import { StudentResponseDto } from './dto/student-response.dto';
import { StudentSearchDto } from './dto/student-search.dto';

import { SaveStudentDto } from './dto/save-student.dto';
import { IncomingHttpHeaders } from 'http';
import { SuccessResponse } from '../success-response';

@Injectable()
export class StudentService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/Student`;

  // At request level
 // At request level

  
  public async findById(studentId: string, header: IncomingHttpHeaders)  {
    var template = require('./../templates/response/teacher_detail.json');

    return this.httpService.get(`${this.url}/${studentId}`, { headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
          const studentData = response.data;
          const studentDto = new StudentDto(template);
          Object.keys(template).forEach(key => {
            studentDto[key] = resolvePath(studentData, template[key]);
          });

          return new SuccessResponse({
            statusCode: response.status,
            message: 'Student found Successfully',
            data: studentDto
          });
      }),
        catchError(e => {
          console.error('E', { ...e });
          var error = new ErrorResponse({
            errorCode : e.response?.status,
            errorMessage : e.response?.data?.params?.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
  }

 

  public async createStudent(header: IncomingHttpHeaders, studentDto: StudentDto) {
    var requestTemplate = require('./../templates/request/create_student.json');
    
    const saveStudentDto = new SaveStudentDto(requestTemplate);
    Object.keys(requestTemplate).forEach(key => {
      saveStudentDto[key] = resolvePath(studentDto, requestTemplate[key]);
    });

    return this.httpService.post(`${this.url}`, saveStudentDto, {headers: {Authorization: header.authorization}})
      .pipe(
        map(response => {
          return new SuccessResponse({
            data: response.data,
            message: "Student created successfully",
            statusCode: response.status,
          });
        }),
        catchError(e => {
          var error = new ErrorResponse({
            errorCode: e.response.status,
            errorMessage: e.response.data.params.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
      );
  }


  public async updateStudent(studentId:string, header: IncomingHttpHeaders, studentDto: StudentDto) {
    var requestTemplate = require('./../templates/request/create_student.json');
    const updateStudentDto = new SaveStudentDto(requestTemplate);
    Object.keys(requestTemplate).forEach(key => {
      updateStudentDto[key] = resolvePath(studentDto, requestTemplate[key]);
    });

    return this.httpService.put(`${this.url}/${studentId}`,updateStudentDto,{ headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
          return new SuccessResponse({
            data: response.data,
            message: "Student updated successfully",
            statusCode: response.status,
          });
      }),
        catchError(e => {
          var error = new ErrorResponse({
            errorCode : e.response.status,
            errorMessage : e.response.data.params.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
}

public async searchStudent(header: IncomingHttpHeaders, studentSearchDto: StudentSearchDto) {
  var template = require('./../templates/response/student_detail.json');
  return this.httpService.post(`${this.url}/search`,studentSearchDto,{ headers: { Authorization: header.authorization } })
  .pipe(
      map(response => {
        const responseData = response.data.map(item =>{
          const searchStudentData = response.data;
          const studentDto = new StudentDto(template);
          Object.keys(template).forEach(key => {
            studentDto[key] = resolvePath(searchStudentData, template[key]);
          });
        });

        return new SuccessResponse({
          statusCode: response.status,
          message: 'Student found Successfully',
          data: responseData
        });
       
    }),
      catchError(e => {
        var error = new ErrorResponse({
          errorCode : e.response.status,
          errorMessage : e.response.data.params.errmsg
        })
        throw new HttpException(error, e.response.status);
      })
  );

 
}

public async findStudentByClass(searchClassId: String, header: IncomingHttpHeaders) {
  var template = require('./../templates/response/student_detail.json');

  var searchFilter = {
    classId : {
     "eq" : searchClassId
    }
  }
  var studentSearchDto = new StudentSearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,studentSearchDto,{ headers: { Authorization: header.authorization } })
  .pipe(
      map(response => {
        const resData = response.data.map(item =>{
          const findStudentData = response.data;
          const studentDto = new StudentDto(template);
          Object.keys(template).forEach(key => {
            studentDto[key] = resolvePath(findStudentData, template[key]);
          });
      });
        return new SuccessResponse({
          statusCode: response.status,
          message: 'Student found Successfully',
          data: resData
        });
    }),
      catchError(e => {
        console.log(e)
        var error = new ErrorResponse({
          errorCode : e.response.status,
          errorMessage : e.response.data.params.errmsg
        })
        throw new HttpException(e.response.data, e.response.status);
      })
  );
}

}


