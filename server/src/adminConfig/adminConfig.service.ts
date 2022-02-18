import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { AdminConfigDto } from './dto/adminConfig.dto';
import { AdminConfig } from './adminConfig.entity';
import { SuccessResponse } from '../success-response';
import { ErrorResponse } from './../error-response';
import { response } from 'express';

@Injectable()
export class AdminConfigService {
    [x: string]: any;

  private entityManager = getManager();

  constructor(
    @InjectRepository(AdminConfig)
    private readonly adminConfigRepository: Repository<AdminConfig>
  ) {}
  
  public async createAdminConfig(adminConfigDto: AdminConfig): Promise<SuccessResponse>  {
    try{
      const data = await this.adminConfigRepository.save(adminConfigDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'admin config is  created Successfully',
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

  public async getAdminConfig(): Promise<SuccessResponse>  {
    try{
      const data = await this.adminConfigRepository.find();
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'admin configs found Successfully',
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

  public async findAdminConfigById(adminConfigId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.adminConfigRepository.findOne(adminConfigId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'admin config is found by its id Successfully',
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

  public async updateAdminConfig(adminConfigId:string, updateAdminConfigDto:AdminConfig): Promise<SuccessResponse>  {
    try{
      const data = await this.adminConfigRepository.update(adminConfigId, updateAdminConfigDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'admin config is updated Successfully',
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

  public async deleteAdminConfig(adminConfigId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.adminConfigRepository.delete(adminConfigId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'admin config is deleted Successfully',
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
}
