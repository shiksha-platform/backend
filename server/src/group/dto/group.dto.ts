import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class GroupDto {
  
  @Exclude()
  osid : string 

  @Expose()
  groupId : string;

  @Expose()
  schoolId : string;

  @Expose()
  name : string;

  @Expose()
  type : string;

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
