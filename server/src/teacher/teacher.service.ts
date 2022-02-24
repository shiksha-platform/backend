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
import { TeacherDetailDto } from './dto/teacher-detail.dto';

import Mustache = require("mustache");
import { SaveTeacherDto } from './dto/save-teacher.dto';
import {SuccessResponse} from "../success-response";
const resolvePath = require('object-resolve-path');

@Injectable()
export class TeacherService {
  constructor(private httpService:HttpService) {}

  url = `${process.env.BASE_URL}/Teacher`;

  public async findById(teacherId: string, header: IncomingHttpHeaders)  {
    var template = require('./../../response_templates/teacher/find_teacher_response.json');
    return this.httpService.get(`${this.url}/${teacherId}`, { headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
          const data = response.data;
          const teacherDetailDto = new TeacherDetailDto(template);
          Object.keys(template).forEach(key => {
            teacherDetailDto[key] = resolvePath(data, template[key]);
          });
       

         return new SuccessResponse({
             statusCode : response.status,
             message :'Teacher found Successfully',
             data : teacherDetailDto,
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
      // var input = Mustache.render(JSON.stringify(requestTemplate), teacherDto);

    // Add object resolver for create teacher request
      const saveTeacherDto = new SaveTeacherDto(requestTemplate);
      Object.keys(requestTemplate).forEach(key => {
        saveTeacherDto[key] = resolvePath(teacherDto, requestTemplate[key]);
      })

      return this.httpService.post(`${this.url}`,saveTeacherDto,{ headers: { Authorization: header.authorization } })
      .pipe(
          map(response => {
            const createdRes = response.data;
            const teacherResponseDto = new TeacherResponseDto(responseTemplate);
            Object.keys(responseTemplate).forEach(key => {
              teacherResponseDto[key] = resolvePath(createdRes, responseTemplate[key]);
            })
            return teacherResponseDto;
          /*var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new TeacherResponseDto(JSON.parse(output))*/
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
    // var input = Mustache.render(JSON.stringify(requestTemplate), teacherDto);

    // Add object resolver for create teacher request
    const updateTeacherDto = new SaveTeacherDto(requestTemplate);
    Object.keys(requestTemplate).forEach(key => {
      updateTeacherDto[key] = resolvePath(teacherDto, requestTemplate[key]);
    })

    return this.httpService.put(`${this.url}/${teacherId}`,updateTeacherDto,{ headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
          const updatedRes = response.data;
          const teacherDto = new TeacherDto(responseTemplate);
          Object.keys(responseTemplate).forEach(key => {
            teacherDto[key] = resolvePath(updatedRes, responseTemplate[key]);
          })
          return teacherDto;
          /*var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new TeacherDto(JSON.parse(output))*/
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
        const responsedata = response.data.map(item => {
          const teacherDetailDto = new TeacherDetailDto(template);
          Object.keys(template).forEach(key => {
            teacherDetailDto[key] = resolvePath(item, template[key]);
          });
          return teacherDetailDto;
        });

        return new SuccessResponse({
          statusCode: response.status,
          message: "Teacher found Successfully",
          data: responsedata
        })
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
          const responseData = response.data;
          const teacherDetailDto = new TeacherDetailDto(template);
          Object.keys(template).forEach(key => {
            teacherDetailDto[key] = resolvePath(responseData, template[key]);
          });
          
          return new SuccessResponse({
              statusCode: response.status,
              message: 'Teacher found Successfully',
              data: teacherDetailDto,
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


