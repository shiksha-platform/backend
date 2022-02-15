import { Exclude, Expose } from 'class-transformer';
import {ApiProperty} from "@nestjs/swagger";

export class AdminConfigDto {
  
  @Exclude()
  osid : string

  @ApiProperty({
    type: String,
    description: 'The adminConfigId of the admin config'
  })
  @Expose()
  adminConfigId : string;

  @ApiProperty({
    type: String,
    description: 'The key of the admin config'
  })
  @Expose()
  key : string;

  @ApiProperty({
    type: String,
    description: 'The value of the admin config'
  })
  @Expose()
  value : string;

  @ApiProperty({
    type: String,
    description: 'The context of the admin config'
  })
  @Expose()
  context : string;

  @ApiProperty({
    type: String,
    description: 'The contextId of the admin config'
  })
  @Expose()
  contextId : string;


  constructor(partial: AdminConfigDto) {
    Object.assign(this, partial);
    this.adminConfigId = `${this.osid}`;
    this.key = `${this.key}` == null || undefined || 'undefined' ? "" : `${this.key}` ;
    this.value = `${this.value}` == null || undefined || 'undefined' ? "" : `${this.value}` ;
    this.context = `${this.context}` == null || undefined || 'undefined' ? "" : `${this.context}` ;
    this.contextId = `${this.contextId}` == null || undefined || 'undefined' ? "" : `${this.contextId}` ;

  }

}
