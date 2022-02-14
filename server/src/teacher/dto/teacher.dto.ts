import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class TeacherDto {
  
  @Exclude()
  osid : string 

  @Expose()
  teacherId: string;
    
  @Expose()
  refTeacherId: string;
  
  @Expose()
  firstName: string;
  
  @Expose()
  lastName: string;
  
  @IsNumber()
  contactNumber: string;
  
  @IsEmail()
  email: string;
  
  @Expose()
  gender: string;
  
  @Expose()
  socialCategory: string;

  @Expose()
  birthDate: string;
  
  @Expose()
  designation: string;
  
  @Expose()
  cadre: string;
  
  @Expose()
  profQualification: string;
  
  @Expose()
  joiningDate: string;
  
  @Expose()
  subjectId: string;
  
  @Expose()
  bloodGroup: string;
  
  @Expose()
  maritalStatus: string;
  
  @Expose()
  blockId: string;
  
  @Expose()
  address: string;
  
  @Expose()
  compSkills: string;
  
  @Expose()
  schoolId: string;
  
  @Expose()
  disability: string;
  
  @Expose()
  religion: string;

  @Expose()
  homeDistance : string;

  @Expose()
  roles : string;

  @Expose()
  acrId : string;

  @Expose()
  retirementDate : string;

  @Expose()
  workingStatus : string;


  constructor(partial: TeacherDto) {
    Object.assign(this, partial);
    
  }

  

}
