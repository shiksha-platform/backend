import { Exclude, Expose } from 'class-transformer';

export class AdminConfigDto {
  
  @Exclude()
  osid : string 

  @Expose()
  adminConfigId : string;

  @Expose()
  key : string;

  @Expose()
  value : string;

  @Expose()
  context : string;

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
