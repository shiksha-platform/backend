import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { SchoolDto} from './dto/school.dto';
import { ErrorResponse } from '../error-response';
import { SchoolResponseDto } from './dto/school-response.dto';
import { SchoolSearchDto } from './dto/school-search.dto';

import Mustache = require("mustache");
import { SaveSchoolDto } from './dto/save-school.dto';
import { IncomingHttpHeaders } from 'http';
import {SuccessResponse} from "../success-response";
import {StudentDto} from "../student/dto/student.dto";

@Injectable()
export class SchoolService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/School`;
  
  public async findById(schoolId: string)  {
    var template = require('./../../response_templates/school/find_school_response.json');
    return this.httpService.get(`${this.url}/${schoolId}`)
    .pipe(
      map(response => {
        var output = Mustache.render(JSON.stringify(template), response.data);
        return new SuccessResponse({
          statusCode: response.status,
          message: 'School found Successfully',
          data: new SchoolDto(JSON.parse(output))
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

 

  public async createSchool(schoolDto: SchoolDto, header: IncomingHttpHeaders) {
      var responseTemplate = require('./../../response_templates/school/create_school_response.json');
      var requestTemplate = require('./../../response_templates/school/create_school_request.json');
      var input = Mustache.render(JSON.stringify(requestTemplate), schoolDto);

      return this.httpService.post(`${this.url}`,new SaveSchoolDto(JSON.parse(input)),{ headers: { Authorization: header.authorization } })
      .pipe(
          map(response => {
          var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new SchoolResponseDto(JSON.parse(output))
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


  public async updateSchool(schoolId:string,schoolDto: SchoolDto, header: IncomingHttpHeaders) {
    var responseTemplate = require('./../../response_templates/school/create_school_response.json');
    var requestTemplate = require('./../../response_templates/school/create_school_request.json');
    var input = Mustache.render(JSON.stringify(requestTemplate), schoolDto);

    return this.httpService.put(`${this.url}/${schoolId}`,new SaveSchoolDto(JSON.parse(input)),{ headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
          var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
          return new SchoolDto(JSON.parse(output))
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

public async searchSchool(schoolSearchDto: SchoolSearchDto, header: IncomingHttpHeaders) {
  var template = require('./../../response_templates/school/find_school_response.json');

  return this.httpService.post(`${this.url}/search`,schoolSearchDto,{ headers: { Authorization: header.authorization } })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          var output = Mustache.render(JSON.stringify(template), item);
          return new SuccessResponse({
            statusCode: response.status,
            message: 'School found Successfully',
            data: new SchoolDto(JSON.parse(output))
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


}


