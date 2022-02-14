"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigController = void 0;
const common_1 = require("@nestjs/common");
const config_search_dto_1 = require("./dto/config-search.dto");
const config_dto_1 = require("./dto/config.dto");
const config_service_1 = require("./config.service");
let ConfigController = class ConfigController {
    constructor(configService) {
        this.configService = configService;
    }
    async getConfigById(configId) {
        return this.configService.findById(configId);
    }
    async findAll() {
        return this.configService.findAll();
    }
    async createConfig(configDto) {
        return this.configService.createConfig(configDto);
    }
    async updateConfig(configId, configDto) {
        return this.configService.updateConfig(configId, configDto);
    }
    async searchConfig(configSearchDto) {
        return this.configService.searchConfig(configSearchDto);
    }
    async findConfigByKey(key) {
        return this.configService.findConfigByKey(key);
    }
    async findConfigByContext(context) {
        return this.configService.findConfigByContext(context);
    }
};
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)("/:id"),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "getConfigById", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [config_dto_1.ConfigDto]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "createConfig", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, config_dto_1.ConfigDto]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "updateConfig", null);
__decorate([
    (0, common_1.Post)("/search"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [config_search_dto_1.ConfigSearchDto]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "searchConfig", null);
__decorate([
    (0, common_1.Get)("/findByKey/:key"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "findConfigByKey", null);
__decorate([
    (0, common_1.Get)("/findByContext/:context"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Param)('context')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "findConfigByContext", null);
ConfigController = __decorate([
    (0, common_1.Controller)("config"),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], ConfigController);
exports.ConfigController = ConfigController;
//# sourceMappingURL=config.controller.js.map