import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { SuccessResponse } from '../success-response';
import { getManager, Repository } from 'typeorm';
import { TopicDto } from './dto/topic.dto';
import { Topic } from './topic.entity';
import { ErrorResponse } from '../error-response';

@Injectable()
export class TopicService {
    [x: string]: any;

  private entityManager = getManager();

  constructor(
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>
  ) {}
  
  public async createTopic(topicDto: TopicDto): Promise<SuccessResponse>  {
    try{
      const data = await this.topicRepository.save(topicDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Topic is created Successfully',
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

  public async getTopic(): Promise<SuccessResponse>  {
    try{
      const data = await this.topicRepository.find();
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Topics found Successfully',
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

  public async findTopicById(topicId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.topicRepository.findOne(topicId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Topic found Successfully',
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

  public async updateTopic(topicId:string, updateTopicDto:TopicDto): Promise<SuccessResponse>  {
    try{
      const data = await this.topicRepository.update(topicId, updateTopicDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Topic is Updated Successfully',
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

  public async deleteTopic(topicId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.topicRepository.delete(topicId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'Topic is Deleted Successfully',
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
