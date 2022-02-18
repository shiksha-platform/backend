import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class SchoolDto {
  
  @Exclude()
  osid : string

  @Expose()
  schoolId: string;

  @ApiProperty({
    type: String,
    description: 'The refSchoolId of the school'
  })
  @Expose()
  refSchoolId: string;

  @ApiProperty({
    type: String,
    description: 'The regulatorName of the school'
  })
  @Expose()
  regulatorName: string;

  @ApiProperty({
    type: String,
    description: 'The name of the school'
  })
  @Expose()
  name: string;

  @ApiProperty({
    type: String,
    description: 'The schoolCategory of the school'
  })
  @Expose()
  schoolCategory: string;

  @ApiProperty({
    type: String,
    description: 'The locationType of the school'
  })
  @Expose()
  locationType: string;

  @ApiProperty({
    type: String,
    description: 'The districtId of the school'
  })
  @Expose()
  districtId: string;

  @ApiProperty({
    type: String,
    description: 'The blockId of the school'
  })
  @Expose()
  blockId: string;

  @ApiProperty({
    type: String,
    description: 'The clusterId of the school'
  })
  @Expose()
  clusterId: string;

  @ApiProperty({
    type: String,
    description: 'The villageId of the school'
  })
  @Expose()
  villageId: string;

  @ApiProperty({
    type: String,
    description: 'The pincode of the school'
  })
  @Expose()
  pincode: string;

  @ApiProperty({
    type: String,
    description: 'The assemblyConst of the school'
  })
  @Expose()
  assemblyConst: string;

  @ApiProperty({
    type: String,
    description: 'The parlConst of the school'
  })
  @Expose()
  parlConst: string;

  @ApiProperty({
    type: String,
    description: 'The gpsPoints of the school'
  })
  @Expose()
  gpsPoints: string;

  @ApiProperty({
    type: String,
    description: 'The startYear of the school'
  })
  @Expose()
  startYear: string;

  @ApiProperty({
    type: String,
    description: 'The teacherId of the school'
  })
  @Expose()
  teacherId: string;

  @ApiProperty({
    type: String,
    description: 'The instMedium of the school'
  })
  @Expose()
  instMedium: string;

  @ApiProperty({
    type: String,
    description: 'The upgradeYear of the school'
  })
  @Expose()
  upgradeYear: string;

  @ApiProperty({
    type: String,
    description: 'The resIdenceType of the school'
  })
  @Expose()
  resIdenceType: string;

  @ApiProperty({
    type: String,
    description: 'The status of the school'
  })
  @Expose()
  status: string;

  @ApiProperty({
    type: String,
    description: 'The shiftId of the school'
  })
  @Expose()
  shiftId : string;

  @ApiProperty({
    type: String,
    description: 'The sessionId of the school'
  })
  @Expose()
  sessionId:string


  constructor(obj: SchoolDto) {
    // Object.keys(obj).forEach(key => obj[key] === '' ? delete obj[key] : {});
    Object.assign(this, obj);
  }

  

}
