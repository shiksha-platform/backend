import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class ConfigDto {
  
  @Exclude()
  osid : string 

  @Expose()
  configId : string;

  @Expose()
  key : string;

  @Expose()
  value : string;

  @Expose()
  core : string;

  @Expose()
  context : string;

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
