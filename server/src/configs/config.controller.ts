import {
  Controller,
  Put,
  Get,
  Body,
  Res,
  Param,
  UseGuards,
  HttpStatus,
  NotFoundException,
  ClassSerializerInterceptor,
  UseInterceptors,
  Post,
  Query,
  SerializeOptions,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import {ApiBasicAuth, ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import { ConfigSearchDto } from "./dto/config-search.dto";
import { ConfigDto } from "./dto/config.dto";
import { ConfigService } from "./config.service";
import {TopicDto} from "../topic/dto/topic.dto";

@ApiTags("Config")
@Controller("config")
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @ApiBasicAuth('access-token')
  @ApiOkResponse({ description: "Config detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getConfigById(@Param("id") configId: string )  {
    return this.configService.findById(configId);
  }

  @Get()
  @ApiBasicAuth('access-token')
  @ApiOkResponse({ description: "Config list."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findAll()  {
    return this.configService.findAll();
  } 

  @Post()
  @ApiBasicAuth('access-token')
  @ApiCreatedResponse({ description: "Config has been created successfully."})
  @ApiBody({ type: ConfigDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async createConfig(@Body() configDto: ConfigDto )  {
    return this.configService.createConfig(configDto);
  }

  @Put("/:id")
  @ApiBasicAuth('access-token')
  @ApiOkResponse({ description: "Config detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateConfig(@Param("id") configId: string, @Body() configDto: ConfigDto )  {
    return this.configService.updateConfig(configId,configDto);
  }

  @Post("/search")
  @ApiBasicAuth('access-token')
  @ApiCreatedResponse({ description: "Config details."})
  @ApiBody({ type: ConfigSearchDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchConfig(@Body() configSearchDto: ConfigSearchDto )  {
   return this.configService.searchConfig(configSearchDto);

  }

  @Get("/findByKey/:key")
  @ApiBasicAuth('access-token')
  @ApiOkResponse({ description: "Config detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findConfigByKey(@Param('key') key : String)  {
    return this.configService.findConfigByKey(key);
  } 

  @Get("/findByContext/:context")
  @ApiBasicAuth('access-token')
  @ApiOkResponse({ description: "Config detail."})
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findConfigByContext(@Param('context') context : String)  {
    return this.configService.findConfigByContext(context);
  } 


 
}
