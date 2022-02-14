export class ConfigResponseDto {

    configId: string
    responseMessage: string
    responseCode : string

    constructor(partial: Partial<ConfigResponseDto>) {
        Object.assign(this, partial);
      }
}