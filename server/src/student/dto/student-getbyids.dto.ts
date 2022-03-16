import { Exclude, Expose } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class StudentGetByIdsDto {
  @ApiProperty({
    type: [String],
    description: "Array of student ids",
  })
  ids: [String];

  constructor(partial: Partial<StudentGetByIdsDto>) {
    Object.assign(this, partial);
  }
}
