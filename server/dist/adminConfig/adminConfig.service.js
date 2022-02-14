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
exports.AdminConfigService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const adminConfig_entity_1 = require("./adminConfig.entity");
const success_response_1 = require("../success-response");
const error_response_1 = require("./../error-response");
const express_1 = require("express");
let AdminConfigService = class AdminConfigService {
    constructor(adminConfigRepository) {
        this.adminConfigRepository = adminConfigRepository;
        this.entityManager = (0, typeorm_2.getManager)();
    }
    async createAdminConfig(adminConfigDto) {
        try {
            const data = await this.adminConfigRepository.save(adminConfigDto);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'admin config is  created Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async getAdminConfig() {
        try {
            const data = await this.adminConfigRepository.find();
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'admin configs found Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async findAdminConfigById(adminConfigId) {
        try {
            const data = await this.adminConfigRepository.findOne(adminConfigId);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'admin config is found by its id Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async updateAdminConfig(adminConfigId, updateAdminConfigDto) {
        try {
            const data = await this.adminConfigRepository.update(adminConfigId, updateAdminConfigDto);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'admin config is updated Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async deleteAdminConfig(adminConfigId) {
        try {
            const data = await this.adminConfigRepository.delete(adminConfigId);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'admin config is deleted Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
};
AdminConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(adminConfig_entity_1.AdminConfig)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminConfigService);
exports.AdminConfigService = AdminConfigService;
//# sourceMappingURL=adminConfig.service.js.map