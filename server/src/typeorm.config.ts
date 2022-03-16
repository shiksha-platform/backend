import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as fs from "fs";
import { dbConfigService } from "./app.service";

const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "postgres",
  port: +process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DATABASE || "tekdi_shiksha",
  entities: [__dirname + "/**/*.entity.ts", __dirname + "/**/*.entity.js"],
  migrationsRun: false,
  logging: true,
  migrationsTableName: "migration",
  migrations: [
    __dirname + "/migration/**/*.ts",
    __dirname + "/migration/**/*.js",
  ],
  synchronize: false,
  cli: {
    migrationsDir: "src/migration",
  },
  ssl: dbConfigService.isProduction()
    ? {
        rejectUnauthorized: false,
        ca: fs.readFileSync("src/certs/ca-certificate.cer").toString(),
      }
    : false,
};

export = typeOrmConfig;
