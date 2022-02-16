import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
      .setTitle('Samgra API')
      .setDescription('Samgra CRUD API')
      .setVersion('1.0.0')
      .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, doc);

  await app.listen(process.env.PORT || 9229);
}
bootstrap();
