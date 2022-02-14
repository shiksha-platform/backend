"use strict";
const fs = require("fs");
const app_service_1 = require("./app.service");
const typeOrmConfig = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "postgres-db",
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
    ssl: app_service_1.dbConfigService.isProduction()
        ? {
            rejectUnauthorized: false,
            ca: fs.readFileSync("src/certs/ca-certificate.cer").toString(),
        }
        : false,
};
module.exports = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map