export class TopicResponseDto {

    topicId: string
    responseMessage: string
    responseCode : string

    constructor(partial: Partial<TopicResponseDto>) {
        Object.assign(this, partial);
      }
}
