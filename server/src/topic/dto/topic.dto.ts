import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class TopicDto {

  @Exclude()
  osid : string 


  @ApiProperty({
    type: String,
    description: 'The topicId of the topic'
  })
  @Expose()
  topicId : string;

  @ApiProperty({
    type: String,
    description: 'The schoolId of the topic'
  })
  @Expose()
  schoolId : string;

  @ApiProperty({
    type: String,
    description: 'The name of the topic'
  })
  @Expose()
  name : string;

  @ApiProperty({
    type: String,
    description: 'The category of the topic'
  })
  @Expose()
  category : string;

  @ApiProperty({
    type: String,
    description: 'The status of the topic'
  })
  @Expose()
  status : string;


  constructor(partial: TopicDto) {
    Object.assign(this, partial);
    this.topicId = `${this.osid}`;
    this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}` ;
    this.name = `${this.name}` == null || undefined || 'undefined' ? "" : `${this.name}` ;
    this.category = `${this.category}` == null || undefined || 'undefined' ? "" : `${this.category}` ;
    this.status = `${this.status}` == null || undefined || 'undefined' ? "" : `${this.status}` ;
  }
}
