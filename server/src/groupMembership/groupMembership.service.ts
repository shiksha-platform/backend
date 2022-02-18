import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { ErrorResponse } from './../error-response';
import { SuccessResponse } from './../success-response';
import { getManager, Repository } from 'typeorm';
import { GroupMembershipDto } from './dto/groupMembership.dto';
import { GroupMembership } from './groupMembership.entity';

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

  public async updateGroupMembership(groupMembershipId:string, updateGroupMembershipDto:GroupMembershipDto): Promise<SuccessResponse>  {
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
    let query ='';
    query += 'groupMembership.groupId = :groupId'

    // Dynamic query for role & schoolId - if get then add
    if(role!='' && role!=null) {
      query += ' and groupMembership.role = :role'
    }
    if(schoolId!='' && schoolId!=null) {
      query += ' and groupMembership.schoolId = :schoolId'
    }

    const membersOfGroup = await this.groupMembershipRepository.createQueryBuilder()
        .select("groupMembership")
        .from(GroupMembership, "groupMembership")
        .where(query, {
          groupId: groupId,
          role: role,
          schoolId: schoolId
        }).getMany();

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
    let query ='';
    query += 'groupMembership.userId = :userId'

    // Dynamically add role & schoolId value
    if(role!='' && role!=null) {
      query += ' and groupMembership.role = :role'
    }
    if(schoolId!='' && schoolId!=null) {
      query += ' and groupMembership.schoolId = :schoolId'
    }

    const membersOfGroup = await this.groupMembershipRepository.createQueryBuilder()
        .select("groupMembership")
        .from(GroupMembership, "groupMembership")
        .where(query, {
          userId: userId,
          role: role,
          schoolId: schoolId
        }).getMany();

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
}
