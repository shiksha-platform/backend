
import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class GroupMembershipDto {
  
  @Exclude()
  osid : string

  @ApiProperty({
    type: String,
    description: 'The groupMembershipId of the group membership'
  })
  @Expose()
  groupMembershipId : string;

  @ApiProperty({
    type: String,
    description: 'The groupId of the group membership'
  })
  @Expose()
  groupId : string;

  @ApiProperty({
    type: String,
    description: 'The schoolId of the group membership'
  })
  @Expose()
  schoolId : string;

  @ApiProperty({
    type: String,
    description: 'The userId of the group membership'
  })
  @Expose()
  userId : string;

  @ApiProperty({
    type: String,
    description: 'The role of the group membership'
  })
  @Expose()
  role : string;

  constructor(partial: GroupMembershipDto) {
    Object.assign(this, partial);
    this.groupMembershipId = `${this.osid}`;
    this.groupId = `${this.groupId}` == null || undefined || 'undefined' ? "" : `${this.groupId}` ;
    this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}` ;
    this.userId = `${this.userId}` == null || undefined || 'undefined' ? "" : `${this.userId}` ;
    this.role = `${this.role}` == null || undefined || 'undefined' ? "" : `${this.role}` ;
  }
}
