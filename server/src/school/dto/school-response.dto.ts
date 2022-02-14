export class SchoolResponseDto {

    schoolId: string
    responseMessage: string
    responseCode : string

    constructor(partial: Partial<SchoolResponseDto>) {
        Object.assign(this, partial);
      }
}