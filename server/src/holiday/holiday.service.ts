import { Injectable, HttpException } from '@nestjs/common';
import { HolidayDto} from './dto/holiday.dto';
import { ErrorResponse } from './../error-response';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Holiday } from './holiday.entity';
import { SuccessResponse } from '../success-response';
import { response } from 'express';

@Injectable()
export class HolidayService {
  [x: string]: any;

  private entityManager = getManager();

  constructor(
    @InjectRepository(Holiday)
    private readonly holidayRepository: Repository<Holiday>
  ) {}
  
  public async createHoliday(holidayDto: Holiday) {
    try{
      const data = await this.holidayRepository.save(holidayDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Holiday is created Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async findAllHolidays(): Promise<SuccessResponse>  {
    try{
      const data = await this.holidayRepository.find();
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Holidays found Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }
 
  public async findHolidayById(holidayId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.holidayRepository.findOne(holidayId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Holiday found Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async updateHoliday(holidayId:string, updateHolidayDto:Holiday): Promise<SuccessResponse>  {
    try{
      const data = await this.holidayRepository.update(holidayId, updateHolidayDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Holiday is Updated Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async deleteHoliday(holidayId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.holidayRepository.delete(holidayId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Holiday is Deleted Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async findHolidayByYear(year:string): Promise<SuccessResponse>  {
    try{
      const data = await this.holidayRepository.find({year});
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Holidays by year found Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async findHolidayByContext(context:string): Promise<SuccessResponse>  {
    try{
      const data = await this.holidayRepository.find({context});
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Holiday found Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

// public async findHolidayByYear(yearInput: String) {
//   const headersRequest  = {
//     'Content-Type': 'application/json', 
//   };

//   var searchFilter = {
//     year : {
//      "eq" : yearInput
//     }
//   }
//   var holidaySearchDto = new HolidaySearchDto({
//     filters : searchFilter
//   })

//   return this.httpService.post(`${this.url}/search`,holidaySearchDto,{ headers: headersRequest })
//   .pipe(
//       map(response => {
//         return response.data.map(item =>{
//           return new HolidayDto(item)
          
//       });
//     }),
//       catchError(e => {
//         console.log(e)
//         var error = new ErrorResponse({
//           errorCode : e.response.status,
//           errorMessage : e.response.data.params.errmsg
//         })
//         throw new HttpException(e.response.data, e.response.status);
//       })
//   );
// }

// public async findHolidayByContext(context: String) {
//   const headersRequest  = {
//     'Content-Type': 'application/json', 
//   };

//   var searchFilter = {
//     context : {
//      "eq" : context
//     }
//   }
//   var holidaySearchDto = new HolidaySearchDto({
//     filters : searchFilter
//   })

//   return this.httpService.post(`${this.url}/search`,holidaySearchDto,{ headers: headersRequest })
//   .pipe(
//       map(response => {
//         return response.data.map(item =>{
//           return new HolidayDto(item)
          
//       });
//     }),
//       catchError(e => {
//         console.log(e)
//         var error = new ErrorResponse({
//           errorCode : e.response.status,
//           errorMessage : e.response.data.params.errmsg
//         })
//         throw new HttpException(e.response.data, e.response.status);
//       })
//   );
// }

}


