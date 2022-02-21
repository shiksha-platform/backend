import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { ErrorResponse } from './../error-response';
import { SuccessResponse } from './../success-response';
import { getManager, Repository } from 'typeorm';
import { GroupMembershipDto } from './dto/groupMembership.dto';
import { GroupMembership } from './groupMembership.entity';
import { Group } from "../group/group.entity";

@Injectable()
export class GroupMembershipService {
    
    [x: string]: any;

  private entityManager = getManager();

  constructor(
    @InjectRepository(GroupMembership)
    private readonly groupMembershipRepository: Repository<GroupMembership>
  ) {}
  
  public async createGroupMembership(groupMembershipDto: GroupMembership): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.save(groupMembershipDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group membership is created Successfully',
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

  public async getGroupMembership(): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.find();
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group memberships found Successfully',
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

  public async findGroupMembershipById(groupMembershipId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.findOne(groupMembershipId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group membership found Successfully by its id',
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

  public async findGroupMembershipBySchoolId(schoolId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.find({schoolId});
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group membership found Successfully by schoolId',
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

  public async findGroupMembershipByUserId(userId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.find({userId});
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group membership found Successfully by userId',
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

  public async updateGroupMembership(groupMembershipId:string, updateGroupMembershipDto:GroupMembership): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.update(groupMembershipId, updateGroupMembershipDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group membership is updated Successfully',
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

  public async deleteGroupMembership(groupMembershipId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.delete(groupMembershipId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Group membership is deleted Successfully',
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

  public async findMembersOfGroup(groupId:string, role: string, schoolId: string): Promise<SuccessResponse> {
    let query: any = { group: groupId }
    // Dynamically add role & schoolId value
    if(role!='' && role!=null) {
      query.role = role
    }
    if(schoolId!='' && schoolId!=null) {
      query.schoolId = schoolId
    }

    const membersOfGroup = await this.groupMembershipRepository
        .find({ where: query, relations: ["group"] })

    if (!membersOfGroup) {
      var error = new ErrorResponse({
        errorCode : ''+HttpStatus.NOT_FOUND,
        errorMessage : 'Data Not found'
      })
      throw new HttpException(error,HttpStatus.NOT_FOUND);
    }
    return new SuccessResponse({
      statusCode : response.statusCode,
      message :'Group of members found Successfully',
      data : membersOfGroup,
    });
  }

  public async findGroupsByUserId(userId: string, role: string, schoolId: string): Promise<SuccessResponse> {
    let query: any = { userId: userId }
    // Dynamically add role & schoolId value
    if(role!='' && role!=null) {
      query.role = role
    }
    if(schoolId!='' && schoolId!=null) {
      query.schoolId = schoolId
    }

    const membersOfGroup = await this.groupMembershipRepository
        .find({ where: query, relations: ["group"], select: ["group"]})

    if (!membersOfGroup) {
      var error = new ErrorResponse({
        errorCode : ''+HttpStatus.NOT_FOUND,
        errorMessage : 'Data Not found'
      })
      throw new HttpException(error,HttpStatus.NOT_FOUND);
    }
    return new SuccessResponse({
      statusCode : response.statusCode,
      message :'Group of members found Successfully',
      data : membersOfGroup.map(item => item.group),
    });
  }
}
