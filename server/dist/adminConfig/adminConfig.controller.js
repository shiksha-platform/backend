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
exports.AdminConfigController = void 0;
const common_1 = require("@nestjs/common");
const adminConfig_dto_1 = require("./dto/adminConfig.dto");
const adminConfig_service_1 = require("./adminConfig.service");
let AdminConfigController = class AdminConfigController {
    constructor(adminConfigService) {
        this.adminConfigService = adminConfigService;
    }
    async create(createAdminConfigDto) {
        const result = await this.adminConfigService.createAdminConfig(createAdminConfigDto);
        if (!result)
            throw new common_1.HttpException('Error creating new admin config', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async get() {
        const result = await this.adminConfigService.getAdminConfig();
        if (!result)
            throw new common_1.HttpException('Error finding admin configs', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async findOne(id) {
        const result = await this.adminConfigService.findAdminConfigById(id);
        if (!result)
            throw new common_1.HttpException('Error finding admin config by its id', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async update(id, updateAdminConfigDto) {
        const result = await this.adminConfigService.updateAdminConfig(id, updateAdminConfigDto);
        if (!result)
            throw new common_1.HttpException('Error updating admin configs', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async delete(id) {
        const result = await this.adminConfigService.deleteAdminConfig(id);
        if (!result)
            throw new common_1.HttpException('Error deleting admin config', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminConfig_dto_1.AdminConfigDto]),
    __metadata("design:returntype", Promise)
], AdminConfigController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminConfigController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminConfigController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, adminConfig_dto_1.AdminConfigDto]),
    __metadata("design:returntype", Promise)
], AdminConfigController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminConfigController.prototype, "delete", null);
AdminConfigController = __decorate([
    (0, common_1.Controller)('adminConfig'),
    __metadata("design:paramtypes", [adminConfig_service_1.AdminConfigService])
], AdminConfigController);
exports.AdminConfigController = AdminConfigController;
//# sourceMappingURL=adminConfig.controller.js.map