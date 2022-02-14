export class GroupResponseDto {

    groupId: string
    responseMessage: string
    responseCode : string

    constructor(partial: Partial<GroupResponseDto>) {
        Object.assign(this, partial);
      }
}