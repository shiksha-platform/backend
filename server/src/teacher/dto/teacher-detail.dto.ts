import { Expose } from 'class-transformer';
import { IsEmail } from 'class-validator';

type TeacherEducation = {
  institute: string;
  program: string;
  graduationYear: string;
  marks: string;
}
type TeacherExperience = {
  institute: string;
  employmentType: string;
  start: Date;
  end: Date;
  teacherType: string
  subject: Array<string>;
  grades: Array<string>;
}

export class TeacherDetailDto {

  @Expose()
  teacherId: string;

  @Expose()
  fullName: string;

  @Expose()
  gender: string;

  @Expose()
  dob: string;

  @Expose()
  identityType: string;

  @Expose()
  identityValue: string;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  mobile: string;

  @Expose()
  address: string;

  @Expose()
  education: Array<TeacherEducation>;

  @Expose()
  experience: Array<TeacherExperience>;

  constructor(partial: TeacherDetailDto) {
    Object.assign(this, partial);
  }

  

}
