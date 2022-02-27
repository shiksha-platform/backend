import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
const resolvePath = require('object-resolve-path');

import { SchoolDto} from './dto/school.dto';
import { ErrorResponse } from '../error-response';
import { SchoolResponseDto } from './dto/school-response.dto';
import { SchoolSearchDto } from './dto/school-search.dto';

import { SaveSchoolDto } from './dto/save-school.dto';
import { IncomingHttpHeaders } from 'http';
import {SuccessResponse} from "../success-response";

@Injectable()
export class SchoolService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/School`;
  
  public async findById(schoolId: string)  {
    var template = require('./../../response_templates/school/find_school_response.json');
    return this.httpService.get(`${this.url}/${schoolId}`)
    .pipe(
      map(response => {
        const schoolData = response.data;
        const schoolDto = new SchoolDto(template);
        Object.keys(template).forEach(key => {
          schoolDto[key] = resolvePath(schoolData, template[key]);
        });

        return new SuccessResponse({
          statusCode: response.status,
          message: 'School found Successfully',
          data: schoolDto
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
      const saveSchoolDto = new SaveSchoolDto(requestTemplate);
      Object.keys(requestTemplate).forEach(key => {
        saveSchoolDto[key] = resolvePath(schoolDto, requestTemplate[key]);
      });

      return this.httpService.post(`${this.url}`,saveSchoolDto,{ headers: { Authorization: header.authorization } })
      .pipe(
          map(response => {
            const createSchoolData = response.data;
            const schoolResponseDto = new SchoolResponseDto(responseTemplate);
            Object.keys(responseTemplate).forEach(key => {
              schoolResponseDto[key] = resolvePath(createSchoolData, responseTemplate[key]);
            });
            return createSchoolData;
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
    const updateSchoolDto = new SaveSchoolDto(requestTemplate);
    Object.keys(requestTemplate).forEach(key => {
      updateSchoolDto[key] = resolvePath(schoolDto, requestTemplate[key]);
    });

    return this.httpService.put(`${this.url}/${schoolId}`,updateSchoolDto,{ headers: { Authorization: header.authorization } })
    .pipe(
        map(response => {
       
          const updateSchoolData = response.data;
          const schoolResponseDto = new SchoolDto(responseTemplate);
          Object.keys(responseTemplate).forEach(key => {
            schoolResponseDto[key] = resolvePath(updateSchoolData, responseTemplate[key]);
          });
          return updateSchoolData;
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
          const searchStudentData = response.data;
          const studentDto = new SchoolDto(template);
          Object.keys(template).forEach(key => {
            studentDto[key] = resolvePath(searchStudentData, template[key]);
          });
          return new SuccessResponse({
            statusCode: response.status,
            message: 'School found Successfully',
            data: studentDto
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


