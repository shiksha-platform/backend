export class HolidayResponseDto {

    holidayId: string
    responseMessage: string
    responseCode : string

    constructor(partial: Partial<HolidayResponseDto>) {
        Object.assign(this, partial);
      }
}