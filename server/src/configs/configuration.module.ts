import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [ConfigController],
    providers: [ConfigService]
})
export class ConfigurationModule {}
