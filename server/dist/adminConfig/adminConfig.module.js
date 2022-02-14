"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminConfigModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const adminConfig_controller_1 = require("./adminConfig.controller");
const adminConfig_entity_1 = require("./adminConfig.entity");
const adminConfig_service_1 = require("./adminConfig.service");
let AdminConfigModule = class AdminConfigModule {
};
AdminConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([adminConfig_entity_1.AdminConfig])],
        controllers: [adminConfig_controller_1.AdminConfigController],
        providers: [adminConfig_service_1.AdminConfigService]
    })
], AdminConfigModule);
exports.AdminConfigModule = AdminConfigModule;
//# sourceMappingURL=adminConfig.module.js.map