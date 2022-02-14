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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const express_1 = require("express");
const success_response_1 = require("./../success-response");
const typeorm_2 = require("typeorm");
const group_entity_1 = require("./group.entity");
const error_response_1 = require("./../error-response");
let GroupService = class GroupService {
    constructor(groupRepository) {
        this.groupRepository = groupRepository;
        this.entityManager = (0, typeorm_2.getManager)();
    }
    async createGroup(groupDto) {
        try {
            const data = await this.groupRepository.save(groupDto);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group is created Successfully',
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
    async getGroup() {
        try {
            const data = await this.groupRepository.find();
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Groups found Successfully',
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
    async findGroupById(groupId) {
        try {
            const data = await this.groupRepository.findOne(groupId);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group found Successfully',
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
    async updateGroup(groupId, updateGroupDto) {
        try {
            const data = await this.groupRepository.update(groupId, updateGroupDto);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group is Updated Successfully',
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
    async deleteGroup(groupId) {
        try {
            const data = await this.groupRepository.delete(groupId);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group is Deleted Successfully',
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
GroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(group_entity_1.Group)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map