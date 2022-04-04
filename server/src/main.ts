import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { join } from "path";
import express = require("express");
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // console.log(app);
  app.use("/uploads", express.static(join(__dirname, "..", "uploads")));

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Samgra API")
    .setDescription("Samgra CRUD API")
    .setVersion("1.0.0")
    .addApiKey(
      { type: "apiKey", name: "Authorization", in: "header" },
      "access-token"
    )
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("swagger", app, doc);
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
