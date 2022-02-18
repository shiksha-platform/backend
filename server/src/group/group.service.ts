import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { SuccessResponse } from './../success-response';
import { getManager, Repository } from 'typeorm';
import { GroupDto } from './dto/group.dto';
import { Group } from './group.entity';
import { ErrorResponse } from './../error-response';

@Injectable()
export class GroupService {
    [x: string]: any;

  private entityManager = getManager();

  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>
  ) {}
  
  public async createGroup(groupDto: Group): Promise<SuccessResponse>  {
    try{
      const data = await this.groupRepository.save(groupDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group is created Successfully',
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

  public async getGroup(): Promise<SuccessResponse>  {
    try{
      const data = await this.groupRepository.find();
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Groups found Successfully',
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

  public async findGroupById(groupId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupRepository.findOne(groupId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group found Successfully',
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

  public async updateGroup(groupId:string, updateGroupDto:Group): Promise<SuccessResponse>  {
    try{
      const data = await this.groupRepository.update(groupId, updateGroupDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group is Updated Successfully',
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

  public async deleteGroup(groupId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupRepository.delete(groupId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group is Deleted Successfully',
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
