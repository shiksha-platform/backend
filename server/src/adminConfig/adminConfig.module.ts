import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminConfigController } from './adminConfig.controller';
import { AdminConfig } from './adminConfig.entity';
import { AdminConfigService } from './adminConfig.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdminConfig])],
  controllers: [AdminConfigController],
  providers: [AdminConfigService]
})
export class AdminConfigModule {}
