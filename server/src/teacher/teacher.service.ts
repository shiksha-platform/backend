import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { IncomingHttpHeaders } from 'http';
import { TeacherDto} from './dto/teacher.dto';
import { ErrorResponse } from './../error-response';
import { TeacherResponseDto } from './dto/teacher-response.dto';
import { TeacherSearchDto } from './dto/teacher-search.dto';

import Mustache = require("mustache");
import { SaveTeacherDto } from './dto/save-teacher.dto';
import {SuccessResponse} from "../success-response";
import {response} from 'express';

@Injectable()
export class TeacherService {
  constructor(private httpService:HttpService) {}

  url = `${process.env.BASE_URL}/Teacher`;

  public async findById(teacherId: string, header: IncomingHttpHeaders)  {
    var template = require('./../../response_templates/teacher/find_teacher_response.json');

    return this.httpService.get(`${this.url}/${teacherId}`, { headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
         var output = Mustache.render(JSON.stringify(template), response.data);

         return new SuccessResponse({
             statusCode : response.status,
             message :'Teacher found Successfully',
             data : new TeacherDto(JSON.parse(output)),
         });
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



  public async createTeacher(header: IncomingHttpHeaders, teacherDto: TeacherDto) {
      var responseTemplate = require('./../../response_templates/teacher/create_teacher_response.json');
      var requestTemplate = require('./../../response_templates/teacher/create_teacher_request.json');
      var input = Mustache.render(JSON.stringify(requestTemplate), teacherDto);

      return this.httpService.post(`${this.url}`,new SaveTeacherDto(JSON.parse(input)),{ headers: { Authorization: header.authorization } })
      .pipe(
          map(response => {
          var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new TeacherResponseDto(JSON.parse(output))
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


  public async updateTeacher(teacherId:string,header: IncomingHttpHeaders,teacherDto: TeacherDto) {
    var responseTemplate = require('./../../response_templates/teacher/create_teacher_response.json');
    var requestTemplate = require('./../../response_templates/teacher/create_teacher_request.json');
    var input = Mustache.render(JSON.stringify(requestTemplate), teacherDto);

    return this.httpService.put(`${this.url}/${teacherId}`,new SaveTeacherDto(JSON.parse(input)),{ headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
          var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new TeacherDto(JSON.parse(output))
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

public async searchTeacher(header: IncomingHttpHeaders, teacherSearchDto: TeacherSearchDto) {
  var template = require('./../../response_templates/teacher/find_teacher_response.json');

  return this.httpService.post(`${this.url}/search`,teacherSearchDto,{ headers: { Authorization: header.authorization } })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          var output = Mustache.render(JSON.stringify(template), item);

          return new SuccessResponse({
            statusCode: response.status,
            message: 'Teacher found Successfully',
            data: new TeacherDto(JSON.parse(output)),
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

public async findTeacherBySubject(searchSubjectId: String, header: IncomingHttpHeaders) {
  var template = require('./../../response_templates/teacher/find_teacher_response.json');

  var searchFilter = {
    subjectId : {
     "eq" : searchSubjectId
    }
  }
  var teacherSearchDto = new TeacherSearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,teacherSearchDto,{ headers: { Authorization: header.authorization } })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          var output = Mustache.render(JSON.stringify(template), item);
          return new SuccessResponse({
              statusCode: response.status,
              message: 'Teacher found Successfully',
              data: new TeacherDto(JSON.parse(output)),
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


