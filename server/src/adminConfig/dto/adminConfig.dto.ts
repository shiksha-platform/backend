import { Exclude, Expose } from 'class-transformer';
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class AdminConfigDto {
  
  @Exclude()
  osid : string

  @Expose()
  adminConfigId : string;

  @ApiProperty({
    type: String,
    description: 'The module of the admin config'
  })
  @ApiPropertyOptional()
  @Expose()
  module : string;

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

  @ApiProperty({
    type: String,
    description: 'The canOverride of the admin config'
  })
  @ApiPropertyOptional()
  @Expose()
  canOverride : string;


  constructor(partial: AdminConfigDto) {
    Object.assign(this, partial);
    this.adminConfigId = `${this.osid}`;
    this.module = `${this.module}` == null || undefined || 'undefined' ? "" : `${this.module}` ;
    this.key = `${this.key}` == null || undefined || 'undefined' ? "" : `${this.key}` ;
    this.value = `${this.value}` == null || undefined || 'undefined' ? "" : `${this.value}` ;
    this.context = `${this.context}` == null || undefined || 'undefined' ? "" : `${this.context}` ;
    this.contextId = `${this.contextId}` == null || undefined || 'undefined' ? "" : `${this.contextId}` ;
    this.canOverride = `${this.canOverride}` == null || undefined || 'undefined' ? "" : `${this.canOverride}` ;

  }

}
