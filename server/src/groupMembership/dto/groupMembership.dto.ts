
import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class GroupMembershipDto {
  
  @Exclude()
  osid : string 
  
  @Expose()
  groupMembershipId : string;

  @Expose()
  groupId : string;

  @Expose()
  schoolId : string;

  @Expose()
  userId : string;

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