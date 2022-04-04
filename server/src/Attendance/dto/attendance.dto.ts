import { Exclude, Expose } from "class-transformer";
import {
  MaxLength,
  IsNotEmpty,
  IsEmail,
  IsString,
  IsNumber,
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class AttendanceDto {
  @ApiProperty({
    type: String,
    description: "The id of the attendance ",
    default: "",
  })
  @Expose()
  @ApiPropertyOptional()
  schoolId: string;

  @ApiProperty({
    type: String,
    description: "The userid of the attendance",
    default: "",
  })
  @Expose()
  userId: string;

  @ApiProperty({
    type: String,
    description: "The groupid of the attendance",
    default: "",
  })
  @Expose()
  groupId: string;

  @ApiProperty({
    type: String,
    description: "The topicid of the attendance",
    default: "",
  })
  @Expose()
  @ApiPropertyOptional()
  topicId: string;

  @ApiProperty({
    type: String,
    description: "The eventid of the attendance",
    default: "",
  })
  @Expose()
  @ApiPropertyOptional()
  eventId: string;

  @ApiProperty({
    type: String,
    description: "The date of the attendance",
    default: new Date(),
  })
  @Expose()
  date: Date;

  @ApiProperty({
    type: String,
    description: "The attendance of the attendance",
    default: "",
  })
  @Expose()
  attendance: string;

  @ApiProperty({
    type: String,
    description: "The remark of the attendance",
    default: "",
  })
  @Expose()
  @ApiPropertyOptional()
  remark: string;

  @ApiProperty({
    type: String,
    description: "The approved of the attendance",
    default: "",
  })
  @Expose()
  @ApiPropertyOptional()
  approved: string;

  @ApiProperty({
    type: String,
    description: "The approvedBy of the attendance",
    default: "",
  })
  @Expose()
  @ApiPropertyOptional()
  approvedBy: string;

  @ApiProperty({
    type: String,
    description: "The latitude of the attendance",
    default: "",
  })
  @Expose()
  @ApiPropertyOptional()
  latitude: string;

  @ApiProperty({
    type: String,
    description: "The longitude of the attendance",
    default: "",
  })
  @Expose()
  @ApiPropertyOptional()
  longitude: string;

  @ApiProperty({
    type: "string",
    format: "binary",
    description: "The image of person",
    default: "",
  })
  @Expose()
  @ApiPropertyOptional()
  image: any;

  constructor(partial: AttendanceDto) {
    Object.assign(this, partial);
  }
}
