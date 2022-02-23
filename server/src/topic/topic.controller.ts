import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import {ApiTags, ApiOkResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiBody, ApiBasicAuth} from "@nestjs/swagger";
import { TopicDto } from './dto/topic.dto';
import { TopicService } from './topic.service';
import {Topic} from "./topic.entity";

@ApiTags('Topic')
@Controller('topic')
export class TopicController {

    constructor(private readonly topicService: TopicService) {}

    @Post()
    @ApiBasicAuth('access-token')
    @ApiCreatedResponse({ description: "Topic has been created successfully."})
    @ApiBody({ type: TopicDto })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async create(@Body() createTopicDto: TopicDto) {
        const createTopicEntity = new Topic();
        Object.assign(createTopicEntity, createTopicDto);
        const result = await this.topicService.createTopic(createTopicEntity);
        if (!result)
        throw new HttpException('Error adding new topic', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get()
    @ApiBasicAuth('access-token')
    @ApiOkResponse({ description: "Topic list."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async get() {
        const result = await this.topicService.getTopic();
        if (!result)
        throw new HttpException('Error finding topics', HttpStatus.BAD_REQUEST);
      return result;
    }

    @Get(':id')
    @ApiBasicAuth('access-token')
    @ApiOkResponse({ description: "Topic detail."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async findOne(@Param('id') id: string) {
        const result = await this.topicService.findTopicById(id);
        if (!result)
        throw new HttpException('Error finding topic by its id', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Put(':id')
    @ApiBasicAuth('access-token')
    @ApiOkResponse({ description: "Topic has been updated successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async update(@Param('id') id: string, @Body() updateTopicDto: TopicDto) {
        const updateTopicEntity = new Topic();
        Object.assign(updateTopicEntity, updateTopicDto);
        const result = await this.topicService.updateTopic(id, updateTopicEntity);
        if (!result)
        throw new HttpException('Error updating topic', HttpStatus.BAD_REQUEST);
      return result;
    }
    
    @Delete(':id')
    @ApiBasicAuth('access-token')
    @ApiOkResponse({ description: "Topic deleted successfully."})
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async delete(@Param('id') id: string) {
        const result = await this.topicService.deleteTopic(id);
        if (!result)
        throw new HttpException('Error deleting topic', HttpStatus.BAD_REQUEST);
      return result;
    }
}
