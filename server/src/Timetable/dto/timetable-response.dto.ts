export class TimetableResponseDto {

    timetableRecordId: string
    responseMessage: string
    responseCode : string

    constructor(partial: Partial<TimetableResponseDto>) {
        Object.assign(this, partial);
      }
}