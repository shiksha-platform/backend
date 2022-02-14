export class TeacherResponseDto {

    teacherId: string
    responseMessage: string
    responseCode : string

    constructor(partial: Partial<TeacherResponseDto>) {
        Object.assign(this, partial);
      }
}