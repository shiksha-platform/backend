export class AttendanceResponseDto {

    attendanceRecordId: string
    responseMessage: string
    responseCode : string

    constructor(partial: Partial<AttendanceResponseDto>) {
        Object.assign(this, partial);
      }
}