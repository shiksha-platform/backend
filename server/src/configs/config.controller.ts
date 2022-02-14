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
import { ConfigSearchDto } from "./dto/config-search.dto";
import { ConfigDto } from "./dto/config.dto";
import { ConfigService } from "./config.service";

@Controller("config")
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getConfigById(@Param("id") configId: string )  {
    return this.configService.findById(configId);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findAll()  {
    return this.configService.findAll();
  } 

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public async createConfig(@Body() configDto: ConfigDto )  {
    return this.configService.createConfig(configDto);
  }

  @Put("/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateConfig(@Param("id") configId: string, @Body() configDto: ConfigDto )  {
    return this.configService.updateConfig(configId,configDto);
  }

  @Post("/search")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchConfig(@Body() configSearchDto: ConfigSearchDto )  {
   return this.configService.searchConfig(configSearchDto);

  }

  @Get("/findByKey/:key")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findConfigByKey(@Param('key') key : String)  {
    return this.configService.findConfigByKey(key);
  } 

  @Get("/findByContext/:context")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findConfigByContext(@Param('context') context : String)  {
    return this.configService.findConfigByContext(context);
  } 


 
}
