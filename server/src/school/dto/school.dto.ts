import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class SchoolDto {
  
  @Exclude()
  osid : string 
  
  @Expose()
  schoolId: string;
  
  @Expose()
  refSchoolId: string;
  
  @Expose()
  regulatorName: string;
  
  @Expose()
  name: string;
  
  @Expose()
  schoolCategory: string;
  
  @Expose()
  locationType: string;
  
  @Expose()
  districtId: string;
  
  @Expose()
  blockId: string;
  
  @Expose()
  clusterId: string;
  
  @Expose()
  villageId: string;
  
  @Expose()
  pincode: string;
  
  @Expose()
  assemblyConst: string;
  
  @Expose()
  parlConst: string;
  
  @Expose()
  gpsPoints: string;
  
  @Expose()
  startYear: string;
  
  @Expose()
  teacherId: string;
  
  @Expose()
  instMedium: string;
  
  @Expose()
  upgradeYear: string;
  
  @Expose()
  resIdenceType: string;
  
  @Expose()
  status: string;

  @Expose()
  shiftId : string;
  
  @Expose()
  sessionId:string


  constructor(obj: SchoolDto) {
    // Object.keys(obj).forEach(key => obj[key] === '' ? delete obj[key] : {});
    Object.assign(this, obj);
  }

  

}
