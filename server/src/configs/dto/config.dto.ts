import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class ConfigDto {
  
  @Exclude()
  osid : string

  @Expose()
  configId : string;

  @ApiProperty({
    type: String,
    description: 'The key of the config'
  })
  @Expose()
  key : string;

  @ApiProperty({
    type: String,
    description: 'The value of the config'
  })
  @Expose()
  value : string;

  @ApiProperty({
    type: String,
    description: 'The core of the config'
  })
  @Expose()
  core : string;

  @ApiProperty({
    type: String,
    description: 'The context of the config'
  })
  @Expose()
  context : string;

  @ApiProperty({
    type: String,
    description: 'The context id of the config'
  })
  @Expose()
  contextId : string;


  constructor(partial: ConfigDto) {
    Object.assign(this, partial);
    this.configId = `${this.osid}`;
    this.key = `${this.key}` == null || undefined || 'undefined' ? "" : `${this.key}` ;
    this.value = `${this.value}` == null || undefined || 'undefined' ? "" : `${this.value}` ;
    this.core = `${this.core}` == null || undefined || 'undefined' ? "" : `${this.core}` ;
    this.context = `${this.context}` == null || undefined || 'undefined' ? "" : `${this.context}` ;
    this.contextId = `${this.contextId}` == null || undefined || 'undefined' ? "" : `${this.contextId}` ;

  }

  

}
