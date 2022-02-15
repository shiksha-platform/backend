import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class GroupDto {
  
  @Exclude()
  osid : string 

  @ApiProperty({
    type: String,
    description: 'The groupId of the group'
  })
  @Expose()
  groupId : string;

  @ApiProperty({
    type: String,
    description: 'The schoolId of the group'
  })
  @Expose()
  schoolId : string;

  @ApiProperty({
    type: String,
    description: 'The name of the group'
  })
  @Expose()
  name : string;

  @ApiProperty({
    type: String,
    description: 'The type of the group'
  })
  @Expose()
  type : string;

  @ApiProperty({
    type: String,
    description: 'The status of the group'
  })
  @Expose()
  status : string;


  constructor(partial: GroupDto) {
    Object.assign(this, partial);
    this.groupId = `${this.osid}`;
    this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}` ;
    this.name = `${this.name}` == null || undefined || 'undefined' ? "" : `${this.name}` ;
    this.type = `${this.type}` == null || undefined || 'undefined' ? "" : `${this.type}` ;
    this.status = `${this.status}` == null || undefined || 'undefined' ? "" : `${this.status}` ;
  }
}
