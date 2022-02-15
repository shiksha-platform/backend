import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { StudentDto} from './dto/student.dto';
import { ErrorResponse } from '../error-response';
import { StudentResponseDto } from './dto/student-response.dto';
import { StudentSearchDto } from './dto/student-search.dto';

import Mustache = require("mustache");
import { SaveStudentDto } from './dto/save-student.dto';

@Injectable()
export class StudentService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/Student`;
  
  public async findById(studentId: string, header)  {
    var template = require('./../../response_templates/student/find_student_response.json');
    return this.httpService.get(`${this.url}/${studentId}`, { headers: header })
    .pipe(
        map(response => {
         var output = Mustache.render(JSON.stringify(template), response.data);
         return new StudentDto(JSON.parse(output))
      }),
        catchError(e => {
          var error = new ErrorResponse({
            errorCode : e.response?.status,
            errorMessage : e.response?.data?.params?.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
  }

 

  public async createStudent(header, studentDto: StudentDto) {
      var responseTemplate = require('./../../response_templates/student/create_student_response.json');
      var requestTemplate = require('./../../response_templates/student/create_student_request.json');
      var input = Mustache.render(JSON.stringify(requestTemplate), studentDto);
      const headersRequest = {
        'Content-Type': 'application/json', 
        // 'Authorization': `Basic ${encodeToken}`,
      };
      return this.httpService.post(`${this.url}`,new SaveStudentDto(JSON.parse(input)),{ headers: header })
      .pipe(
          map(response => {
          var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new StudentResponseDto(JSON.parse(output))
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


  public async updateStudent(studentId:string,header,studentDto: StudentDto) {
    var responseTemplate = require('./../../response_templates/student/create_student_response.json');
    var requestTemplate = require('./../../response_templates/student/create_student_request.json');
    var input = Mustache.render(JSON.stringify(requestTemplate), studentDto);
    const headersRequest = {
      'Content-Type': 'application/json', 
      // 'Authorization': `Basic ${encodeToken}`,
    };
    return this.httpService.patch(`${this.url}/${studentId}`,new SaveStudentDto(JSON.parse(input)),{ headers: header })
    .pipe(
        map(response => {
          var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new StudentDto(JSON.parse(output))
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

public async searchStudent(header, studentSearchDto: StudentSearchDto) {
  var template = require('./../../response_templates/student/find_student_response.json');
  const headersRequest = {
    'Content-Type': 'application/json', 
    // 'Authorization': `Basic ${encodeToken}`,
  };
  return this.httpService.post(`${this.url}/search`,studentSearchDto,{ headers: header })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          var output = Mustache.render(JSON.stringify(template), item);
          return new StudentDto(JSON.parse(output))    
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

public async findStudentByClass(searchClassId: String, header) {
  var template = require('./../../response_templates/student/find_student_response.json');

  const headersRequest = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    classId : {
     "eq" : searchClassId
    }
  }
  var studentSearchDto = new StudentSearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,studentSearchDto,{ headers: header })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          var output = Mustache.render(JSON.stringify(template), item);
          return new StudentDto(JSON.parse(output))   
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


