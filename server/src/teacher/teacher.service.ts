import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { catchError, map } from "rxjs/operators";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";
import { IncomingHttpHeaders } from "http";
import { TeacherDto } from "./dto/teacher.dto";
import { ErrorResponse } from "./../error-response";
import { TeacherResponseDto } from "./dto/teacher-response.dto";
import { TeacherSearchDto } from "./dto/teacher-search.dto";
import { TeacherDetailDto } from "./dto/teacher-detail.dto";

import { SaveTeacherDto } from "./dto/save-teacher.dto";
import { SuccessResponse } from "../success-response";
const resolvePath = require("object-resolve-path");

@Injectable()
export class TeacherService {
  constructor(private httpService: HttpService) {}

  url = `${process.env.BASE_URL}/Teacher`;

  public async findById(teacherId: string, request: any) {
    var template = require("./../templates/response/teacher_detail.json");
    return this.httpService.get(`${this.url}/${teacherId}`, request).pipe(
      map((response) => {
        const data = response.data;
        const teacherDetailDto = new TeacherDetailDto(template);
        Object.keys(template).forEach((key) => {
          teacherDetailDto[key] = resolvePath(data, template[key]);
        });

        return new SuccessResponse({
          statusCode: response.status,
          message: "Teacher found Successfully",
          data: teacherDetailDto,
        });
      }),
      catchError((e) => {
        var error = new ErrorResponse({
          errorCode: e.response?.status,
          errorMessage: e.response?.data?.params?.errmsg,
        });
        throw new HttpException(error, e.response.status);
      })
    );
  }

  public async createTeacher(request: any, teacherDto: TeacherDto) {
    var requestTemplate = require("./../templates/request/create_teacher.json");

    // Add object resolver for create teacher request
    const saveTeacherDto = new SaveTeacherDto(requestTemplate);
    Object.keys(requestTemplate).forEach((key) => {
      saveTeacherDto[key] = resolvePath(teacherDto, requestTemplate[key]);
    });

    return this.httpService.post(`${this.url}`, saveTeacherDto, request).pipe(
      map((response) => {
        return new SuccessResponse({
          data: response.data,
          message: "Teacher created successfully",
          statusCode: response.status,
        });
      }),
      catchError((e) => {
        var error = new ErrorResponse({
          errorCode: e.response.status,
          errorMessage: e.response.data.params.errmsg,
        });
        throw new HttpException(error, e.response.status);
      })
    );
  }

  public async updateTeacher(
    teacherId: string,
    header: IncomingHttpHeaders,
    teacherDto: TeacherDto
  ) {
    var requestTemplate = require("./../templates/request/create_teacher.json");

    // Add object resolver for create teacher request
    const updateTeacherDto = new SaveTeacherDto(requestTemplate);
    Object.keys(requestTemplate).forEach((key) => {
      updateTeacherDto[key] = resolvePath(teacherDto, requestTemplate[key]);
    });

    return this.httpService
      .put(`${this.url}/${teacherId}`, updateTeacherDto, {
        headers: { Authorization: header.authorization },
      })
      .pipe(
        map((response) => {
          return new SuccessResponse({
            data: response.data,
            message: "Teacher updated successfully",
            statusCode: response.status,
          });
        }),
        catchError((e) => {
          var error = new ErrorResponse({
            errorCode: e.response.status,
            errorMessage: e.response.data.params.errmsg,
          });
          throw new HttpException(error, e.response.status);
        })
      );
  }

  public async searchTeacher(
    header: IncomingHttpHeaders,
    teacherSearchDto: TeacherSearchDto
  ) {
    var template = require("./../templates/response/teacher_detail.json");

    return this.httpService
      .post(`${this.url}/search`, teacherSearchDto, {
        headers: { Authorization: header.authorization },
      })
      .pipe(
        map((response) => {
          const responsedata = response.data.map((item) => {
            const teacherDetailDto = new TeacherDetailDto(template);
            Object.keys(template).forEach((key) => {
              teacherDetailDto[key] = resolvePath(item, template[key]);
            });
            return teacherDetailDto;
          });

          return new SuccessResponse({
            statusCode: response.status,
            message: "Teacher found Successfully",
            data: responsedata,
          });
        }),
        catchError((e) => {
          var error = new ErrorResponse({
            errorCode: e.response.status,
            errorMessage: e.response.data.params.errmsg,
          });
          throw new HttpException(error, e.response.status);
        })
      );
  }

  public async findTeacherBySubject(
    searchSubjectId: String,
    header: IncomingHttpHeaders
  ) {
    var template = require("./../templates/response/teacher_detail.json");

    var searchFilter = {
      subjectId: {
        eq: searchSubjectId,
      },
    };
    var teacherSearchDto = new TeacherSearchDto({
      filters: searchFilter,
    });

    return this.httpService
      .post(`${this.url}/search`, teacherSearchDto, {
        headers: { Authorization: header.authorization },
      })
      .pipe(
        map((response) => {
          const responsedata = response.data.map((item) => {
            const responseData = response.data;
            const teacherDetailDto = new TeacherDetailDto(template);
            Object.keys(template).forEach((key) => {
              teacherDetailDto[key] = resolvePath(responseData, template[key]);
            });
          });

          return new SuccessResponse({
            statusCode: response.status,
            message: "Teacher found Successfully",
            data: responsedata,
          });
        }),
        catchError((e) => {
          console.log(e);
          var error = new ErrorResponse({
            errorCode: e.response.status,
            errorMessage: e.response.data.params.errmsg,
          });
          throw new HttpException(e.response.data, e.response.status);
        })
      );
  }
}
