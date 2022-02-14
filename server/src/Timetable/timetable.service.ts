import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { TimetableDto} from './dto/timetable.dto';
import { ErrorResponse } from './../error-response';
import { TimetableResponseDto } from './dto/timetable-response.dto';
import { TimetableSearchDto } from './dto/timetable-search.dto';

@Injectable()
export class TimetableService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/Timetable`;

  public async findById(timetableId: string)  {
    return this.httpService.get(`${this.url}/${timetableId}`)
    .pipe(
        map(response => {
          return new TimetableDto(response.data) 
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

  public async createTimetable(timetableDto: TimetableDto) {
      const headersRequest = {
        'Content-Type': 'application/json', 
        // 'Authorization': `Basic ${encodeToken}`,
      };
      return this.httpService.post(`${this.url}`,timetableDto,{ headers: headersRequest })
      .pipe(
          map(response => {
            return new TimetableResponseDto( {
              timetableRecordId: response.data.result.timetable.osid,
              responseMessage : "Timetable Saved Successfully",
              responseCode : response.data.responseCode
            })
        }),
          catchError(e => {
            console.log(e.response.data)
            var error = new ErrorResponse({
              errorCode : e.response.status,
              errorMessage : e.response.data.params.errmsg
            })
            throw new HttpException(error, e.response.status);
          })
      );
  }


  public async updateTimetable(timetableId:string,timetableDto: TimetableDto) {
    const headersRequest = {
      'Content-Type': 'application/json', 
      // 'Authorization': `Basic ${encodeToken}`,
    };
    return this.httpService.put(`${this.url}/${timetableId}`,timetableDto,{ headers: headersRequest })
    .pipe(
        map(response => {
          return new TimetableResponseDto( {
            timetableRecordId: response.data.result.timetable.osid,
            responseMessage : "Timetable Updated Successfully",
            responseCode : response.data.responseCode
          })
      }),
        catchError(e => {
          console.log(e.response.data)
          var error = new ErrorResponse({
            errorCode : e.response.status,
            errorMessage : e.response.data.params.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
}

public async searchTimetable(timetableSearchDto: TimetableSearchDto) {
  const headersRequest = {
    'Content-Type': 'application/json', 
    // 'Authorization': `Basic ${encodeToken}`,
  };
  return this.httpService.post(`${this.url}/search`,timetableSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
            return new TimetableDto(item)
            
        });
       
    }),
      catchError(e => {
        console.log(e)
        var error = new ErrorResponse({
          errorCode : e.response.status,
          errorMessage : e.response.data.params.errmsg
        })
        throw new HttpException(error, e.response.status);
      })
  );

 
}

public async findTimetableByClass(searchClassId: String) {
  const headersRequest = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    classId : {
     "eq" : searchClassId
    }
  }
  var timetableSearchDto = new TimetableSearchDto({
    filters : searchFilter
  })

  console.log(timetableSearchDto)
  return this.httpService.post(`${this.url}/search`,timetableSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new TimetableDto(item)
          
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


