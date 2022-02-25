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
    var template = require('./../../response_templates/student/find_student_response.json');

    return this.httpService.get(`${this.url}/${studentId}`, { headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
          const studentData = response.data;
          const studentDto = new StudentDto(template);
          Object.keys(template).forEach(key => {
            studentDto[key] = resolvePath(studentData, template[key]);
          });

         /* var output = Mustache.render(JSON.stringify(template), response.data);*/
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
    var responseTemplate = require('./../../response_templates/student/create_student_response.json');
    var requestTemplate = require('./../../response_templates/student/create_student_request.json');
    // var input = Mustache.render(JSON.stringify(requestTemplate), studentDto);

    const saveStudentDto = new SaveStudentDto(requestTemplate);
    Object.keys(requestTemplate).forEach(key => {
      saveStudentDto[key] = resolvePath(studentDto, requestTemplate[key]);
    });

    return this.httpService.post(`${this.url}`, saveStudentDto, {headers: {Authorization: header.authorization}})
      .pipe(
        map(response => {

          const createStudentData = response.data;
          const studentResponseDto = new StudentResponseDto(responseTemplate);
          Object.keys(responseTemplate).forEach(key => {
            studentResponseDto[key] = resolvePath(createStudentData, responseTemplate[key]);
          });
          return createStudentData;
          /*var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new StudentResponseDto(JSON.parse(output))*/
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
    var responseTemplate = require('./../../response_templates/student/create_student_response.json');
    var requestTemplate = require('./../../response_templates/student/create_student_request.json');
    // var input = Mustache.render(JSON.stringify(requestTemplate), studentDto);
    const updateStudentDto = new SaveStudentDto(requestTemplate);
    Object.keys(requestTemplate).forEach(key => {
      updateStudentDto[key] = resolvePath(studentDto, requestTemplate[key]);
    });

    return this.httpService.put(`${this.url}/${studentId}`,updateStudentDto,{ headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
          const updateStudentData = response.data;
          const studentDto = new StudentDto(responseTemplate);
          Object.keys(responseTemplate).forEach(key => {
            studentDto[key] = resolvePath(updateStudentData, responseTemplate[key]);
          });
          return updateStudentData;
          /*var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new StudentDto(JSON.parse(output))*/
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
  var template = require('./../../response_templates/student/find_student_response.json');
  return this.httpService.post(`${this.url}/search`,studentSearchDto,{ headers: { Authorization: header.authorization } })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          // var output = Mustache.render(JSON.stringify(template), item);
          const searchStudentData = response.data;
          const studentDto = new StudentDto(template);
          Object.keys(template).forEach(key => {
            studentDto[key] = resolvePath(searchStudentData, template[key]);
          });

          return new SuccessResponse({
            statusCode: response.status,
            message: 'Student found Successfully',
            data: searchStudentData
          });
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
  var template = require('./../../response_templates/student/find_student_response.json');

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
        return response.data.map(item =>{
          // var output = Mustache.render(JSON.stringify(template), item);
          const findStudentData = response.data;
          const studentDto = new StudentDto(template);
          Object.keys(template).forEach(key => {
            studentDto[key] = resolvePath(findStudentData, template[key]);
          });

          return new SuccessResponse({
            statusCode: response.status,
            message: 'Student found Successfully',
            data: studentDto
          });
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


