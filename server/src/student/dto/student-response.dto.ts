export class StudentResponseDto {

    studentId: string
    responseMessage: string
    responseCode : string

    constructor(partial: Partial<StudentResponseDto>) {
        Object.assign(this, partial);
      }
}